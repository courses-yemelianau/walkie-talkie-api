import { Router } from 'express';
import { MessageController } from '@controllers/messages.controller';
import { CreateMessageDto } from '@dtos/messages.dto';
import { Routes } from '@interfaces/routes.interface';
import { ValidationMiddleware } from '@middlewares/validation.middleware';

export class MessageRoute implements Routes {
    public path = '/messages';
    public router = Router();
    public message = new MessageController();

    constructor() {
        this.initializeRoutes();
    }

    private initializeRoutes() {
        this.router.get(`${this.path}/:id`, this.message.getMessages);
        this.router.post(`${this.path}`, ValidationMiddleware(CreateMessageDto), this.message.createMessage);
    }
}
