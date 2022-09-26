import { Injectable, UnauthorizedException } from '@nestjs/common';
import { Role } from 'src/core/types/IUser';
import { JwtAuthGuard } from './jwt-auth.guard';

@Injectable()
export class AdminGuard extends JwtAuthGuard {
  handleRequest(error, user) {
    const isAdmin = user.role === Role.ADMIN;

    if (error || !isAdmin) {
      throw error || new UnauthorizedException();
    }

    return user;
  }
}
