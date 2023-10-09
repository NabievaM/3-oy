import { Injectable } from "@nestjs/common";
import { CreateUserDto } from './dto/create-user.dto'
import { UpdateUserDto } from "./dto/update-user.dto";
@Injectable()
export class AppService {
    getHello(): string {
        return 'AppServicedan salom';
    }
    getUserId(id: string): string {
        return `ID = ${id}`
    }
    getAnyParams(params: Record<string, string>): string {
        return `ID = ${params.id}NAME=${params.name}`;
    }
    createUser(createUserDto: CreateUserDto) {
        const { name, age } = createUserDto
        return `User created:Name=${name},Age=${age}`;
    }
    updateUser(id: string, updateUserDto: UpdateUserDto) {
        const { name, age } = updateUserDto
        return `User updated:Name=${name},Age=${age},ID=${id}`;
    }
    deleteUser(id: string): string {
        return `User deleted: ID = ${id}`;
    }
}