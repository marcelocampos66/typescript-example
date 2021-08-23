import { Request, Response } from 'express';
import EmailService from '../services/EmailService';

const users = [
  { name: 'John', email: 'johndoe@email.com'},
  { name: 'Adam', email: 'adamlev@email.com'},
  { name: 'Roger', email: 'rogersteve@email.com'},
];

export default {
  async getAllUsers(req: Request, res: Response) {
    return res.json(users);
  },

  async create(req: Request, res: Response) {
    const emailService = new EmailService();
    emailService.sendMail({
      to: { name: 'Marcelo', email: 'marcelo@email.com' },
      message: { subject: 'Bem vindo ao sistema!', body: 'Seja bem vindo!' }
    });
    return res.end();
  }
};