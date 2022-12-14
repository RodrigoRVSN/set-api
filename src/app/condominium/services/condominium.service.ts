import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/core/database/db.service';
import { CreateCondominiumDto, UpdateCondominiumDto } from '../dtos';

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

  findCondominiumById(condominiumId: string) {
    return this.Prisma.condominium.findFirst({
      where: { id: condominiumId },
    });
  }

  createCondominium(createCondominiumDto: CreateCondominiumDto) {
    return this.Prisma.condominium.create({ data: createCondominiumDto });
  }

  deleteCondominium(condominiumId: string) {
    return this.Prisma.condominium.delete({ where: { id: condominiumId } });
  }

  updateCondominium(
    condominiumId: string,
    updateCondominiumDto: UpdateCondominiumDto,
  ) {
    return this.Prisma.condominium.update({
      where: { id: condominiumId },
      data: updateCondominiumDto,
    });
  }
}
