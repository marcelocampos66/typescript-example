interface IMailTo {
  name: string;
  email: string;
}

interface IMailMessage {
  subject: string;
  body: string;
  attachment?: string[]; // ou Array<string>
}

interface IMessageDTO {
  to: IMailTo;
  message: IMailMessage;
}

//  DTO = Data Transfer Object

interface IEmailService {
  sendMail(request: IMessageDTO): void;
}

export default class EmailService implements IEmailService {
  sendMail({ to, message }: IMessageDTO) {
    console.log(`Email enviado para ${to.name}: ${message.subject}`);
  }
}