import { Request, Response } from 'express';
import { getMongoRepository } from 'typeorm';

import Person from '../models/Person';

class PersonController {
  public async index(req: Request, res: Response): Promise<Response> {
    const personRepository = getMongoRepository(Person);
    const people = await personRepository.find({
      order: {
        created_at: 'DESC',
      },
    });

    return res.json(people);
  }

  public async show(req: Request, res: Response): Promise<Response> {
    const personRepository = getMongoRepository(Person);

    const { id } = req.params;

    const person = await personRepository.findOne(id);

    if (!person) {
      return res.status(404).json({ error: 'Person not found' });
    }

    return res.json(person);
  }

  public async create(req: Request, res: Response): Promise<Response> {
    const personRepository = getMongoRepository(Person);
    const { name, email, friend } = req.body;

    const person = personRepository.create({
      name,
      email,
      friend: friend || '',
    });

    await personRepository.save(person);

    return res.json(person);
  }

  public async update(req: Request, res: Response): Promise<Response> {
    const personRepository = getMongoRepository(Person);
    const { id } = req.body;

    await personRepository.update(id, req.body);

    const updatedPerson = await personRepository.find(id);

    return res.json(updatedPerson);
  }

  public async delete(req: Request, res: Response): Promise<Response> {
    const personRepository = getMongoRepository(Person);

    const { id } = req.params;

    await personRepository.delete(id);

    return res.json();
  }
}

export default PersonController;
