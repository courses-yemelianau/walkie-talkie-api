import { NextFunction, Request, Response } from 'express';
import { Container } from 'typedi';
import { CreateMessageDto } from '@dtos/messages.dto';
import { Message } from '@interfaces/messages.interface';
import { MessageService } from '@services/messages.service';

export class MessageController {
    public message = Container.get(MessageService);

    public getMessages = async (req: Request, res: Response, next: NextFunction) => {
        try {
            const id: number = +req.params.id;
            const findAllMessagesData: Message[] = await this.message.findMessagesByRecipientId(id);

            res.status(200).json({ data: findAllMessagesData, message: 'findAll' });
        } catch (error) {
            next(error);
        }
    };

    public createMessage = async (req: Request, res: Response, next: NextFunction) => {
        try {
            const messageData: CreateMessageDto = req.body;

            const createdMessage: Message = await this.message.createMessage(messageData);

            res.status(201).json({ data: createdMessage, message: 'Message created' });
        } catch (error) {
            next(error);
        }
    };
}
