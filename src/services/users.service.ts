import { Service } from 'typedi';
import { DB } from '@database';
import { CreateUserDto } from '@dtos/users.dto';
import { User } from '@interfaces/users.interface';

@Service()
export class UserService {
    public async findAllUser(): Promise<User[]> {
        const allUser: User[] = await DB.Users.findAll();
        return allUser;
    }

    public async createUser(userData: CreateUserDto): Promise<User> {
        const existingUser: User | null = await DB.Users.findOne({
            where: { name: userData.name }
        });

        if (existingUser) {
            return existingUser;
        }

        const createdUser: User = await DB.Users.create(userData);

        return createdUser;
    }
}
