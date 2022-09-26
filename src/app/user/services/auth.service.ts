import { Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { User } from '@prisma/client';
import { PrismaService } from 'src/core/database/db.service';

@Injectable()
export class AuthService {
  constructor(
    private Prisma: PrismaService,
    private readonly jwtService: JwtService,
  ) {}

  findByEmail(email: string) {
    return this.Prisma.user.findFirst({ where: { email: { equals: email } } });
  }

  async login({ name, id, email, role, phone }: User) {
    const payload = { email, sub: id, role };

    const userData = {
      name,
      email,
      role,
      phone,
    };

    return {
      ...userData,
      access_token: this.jwtService.sign(payload),
    };
  }
}
