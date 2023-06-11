import { Service } from 'typedi';
import { DB } from '@database';
import { CreateMessageDto } from '@dtos/messages.dto';
import { Message } from '@interfaces/messages.interface';
import { UserService } from './users.service';

@Service()
export class MessageService {
    private userService: UserService;

    constructor() {
        this.userService = new UserService();
    }

    public async findMessagesByRecipientId(recipientId: number): Promise<Message[]> {
        const messages: Message[] = await DB.Messages.findAll({
            where: { recipientId }
        });
        return messages;
    }

    public async createMessage(messageData: CreateMessageDto): Promise<Message> {
        const { recipient, username, title, message } = messageData;

        const user = await this.userService.createUser({ name: recipient });

        const createdMessage: Message = await DB.Messages.create({
            recipientId: user.id,
            username,
            title,
            message
        });

        return createdMessage;
    }
}
