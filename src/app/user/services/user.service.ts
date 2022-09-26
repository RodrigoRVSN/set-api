import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/core/database/db.service';
import { encryptPassword } from 'src/core/utils/auth/crypto';
import { CreateUserDto } from '../dtos/CreateUserDto';

@Injectable()
export class UserService {
  constructor(private Prisma: PrismaService) {}

  getUsers() {
    return this.Prisma.user.findMany({
      include: {
        condominium: true,
      },
    });
  }

  findUserById(userId: string) {
    return this.Prisma.user.findFirst({ where: { id: { equals: userId } } });
  }

  findUserByEmail(email: string) {
    return this.Prisma.user.findFirst({ where: { email: { equals: email } } });
  }

  async createUser(createUserDto: CreateUserDto) {
    const password = await encryptPassword(createUserDto.password);

    return this.Prisma.user.create({ data: { ...createUserDto, password } });
  }

  deleteUser(userId: string) {
    return this.Prisma.user.delete({ where: { id: userId } });
  }
}
