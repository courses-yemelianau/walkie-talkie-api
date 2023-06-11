import { Sequelize, DataTypes, Model, Optional } from 'sequelize';
import { Message } from '@interfaces/messages.interface';

export type MessageCreationAttributes = Optional<Message, 'id'>;

export class MessageModel extends Model<Message, MessageCreationAttributes> implements Message {
    public id: number;
    public recipientId: number;
    public username: string;
    public title: string;
    public message: string;
}

export default function (sequelize: Sequelize): typeof MessageModel {
    MessageModel.init(
        {
            id: {
                autoIncrement: true,
                primaryKey: true,
                type: DataTypes.INTEGER
            },
            recipientId: {
                allowNull: false,
                type: DataTypes.INTEGER
            },
            username: {
                allowNull: false,
                type: DataTypes.STRING(255)
            },
            title: {
                allowNull: false,
                type: DataTypes.STRING
            },
            message: {
                allowNull: false,
                type: DataTypes.TEXT
            }
        },
        {
            tableName: 'messages',
            sequelize
        }
    );

    return MessageModel;
}
