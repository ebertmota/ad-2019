import { Request, Response } from 'express';
import { getMongoRepository } from 'typeorm';

import Person from '../models/Person';
import SendEmailService from '../services/SendEmailService';

import IPersonDTO from '../dtos/IPersonDTO';

class DrawController {
  public async create(req: Request, res: Response): Promise<Response> {
    const personRepository = getMongoRepository(Person);
    const { people } = req.body;

    const parsedPeople = JSON.parse(people);

    const names: string[] = [];

    parsedPeople.map((item: any) => {
      names.push(item.name);
    });

    // Starting Draw
    const arr1 = names.slice();
    const arr2 = names.slice();

    arr1.sort(() => {
      return 0.5 - Math.random();
    });
    arr2.sort(() => {
      return 0.5 - Math.random();
    });

    while (arr1.length) {
      const name1 = arr1.pop();
      const name2 = arr2[0] === name1 ? arr2.pop() : arr2.shift();

      parsedPeople.map((person: IPersonDTO) => {
        if (person.name === name1) {
          person.friend = name2;
        }
      });
    }

    // Update Friend information in Database and sending emails for every person
    parsedPeople.map(async (person: any) => {
      await personRepository.update(person.id, {
        friend: person.friend,
      });
      await SendEmailService.execute({
        name: person.name,
        email: person.email,
        friend: person.friend,
      });
    });

    return res.json();
  }
}

export default DrawController;
