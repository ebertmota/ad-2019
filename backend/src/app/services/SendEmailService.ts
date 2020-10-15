import nodemailer, { Transporter } from 'nodemailer';

interface ISendMailDTO {
  name: string;
  email: string;
  friend: string;
}

class SendEmailService {
  private client: Transporter;

  constructor() {
    nodemailer.createTestAccount().then(account => {
      const transporter = nodemailer.createTransport({
        host: account.smtp.host,
        port: account.smtp.port,
        secure: account.smtp.secure,
        auth: {
          user: account.user,
          pass: account.pass,
        },
      });

      this.client = transporter;
    });
  }

  public async execute({ name, email, friend }: ISendMailDTO): Promise<void> {
    const message = await this.client.sendMail({
      from: {
        name: 'Amigo Secreto',
        address: 'team@amigosecreto.com',
      },
      to: {
        name,
        address: email,
      },
      subject: 'Resultado do sorteio de amigo secreto.',
      html: `
      <h1>
        Olá ${name}
      </h1>
      <p style="font-size:16px">Seu amigo secreto é: <strong>${friend}</strong></p>
      `,
    });

    console.log('Message sent', message.messageId); /* eslint-disable-line */
    console.log('Preview URL: %s', nodemailer.getTestMessageUrl(message)); /* eslint-disable-line */
    console.log('--------------------------------------------------'); /* eslint-disable-line */
  }
}

export default new SendEmailService();
