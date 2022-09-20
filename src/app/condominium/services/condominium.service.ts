import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/core/database/db.service';
import { Role } from 'src/core/types/IUser';

@Injectable()
export class CondominiumService {
  constructor(private Prisma: PrismaService) {}

  getSyndicates() {
    return this.Prisma.user.findMany({
      where: { role: { equals: Role.SYNDICATE } },
      select: {
        name: true,
        email: true,
        phone: true,
        role: true,
      },
    });
  }
}
