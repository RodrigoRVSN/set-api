import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/core/database/db.service';
import { Role } from 'src/core/types/IUser';
import { CreateCondominiumDto } from '../dtos';

@Injectable()
export class CondominiumService {
  constructor(private Prisma: PrismaService) {}

  getCondominiums() {
    return this.Prisma.condominium.findMany({
      include: {
        syndicate: true,
      },
    });
  }

  getSyndicates() {
    return this.Prisma.user.findMany({
      where: { role: { equals: Role.SYNDICATE } },
      select: {
        name: true,
        email: true,
        phone: true,
        role: true,
        id: true,
      },
    });
  }

  findSyndicateById(id: string) {
    return this.Prisma.user.findFirst({
      where: {
        id,
        role: Role.SYNDICATE,
      },
    });
  }

  createCondominium(createCondominiumDto: CreateCondominiumDto) {
    return this.Prisma.condominium.create({ data: createCondominiumDto });
  }
}
