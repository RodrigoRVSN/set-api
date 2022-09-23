import {
  BadRequestException,
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  UseGuards,
} from '@nestjs/common';
import { AdminGuard } from 'src/app/auth/role.guard';
import { CreateCondominiumDto } from '../dtos';
import { CondominiumService } from '../services';

@Controller('condominium')
export class CondominiumController {
  constructor(private readonly appService: CondominiumService) {}

  @Get()
  getCondominiums() {
    return this.appService.getCondominiums();
  }

  @Post('create')
  async createCondominium(@Body() createCondominiumDto: CreateCondominiumDto) {
    const syndicateExists = await this.appService.findSyndicateById(
      createCondominiumDto.syndicateId,
    );

    if (!syndicateExists) {
      throw new BadRequestException('The user is invalid');
    }

    return this.appService.createCondominium(createCondominiumDto);
  }

  @UseGuards(AdminGuard)
  @Delete('delete/:id')
  async removeCondominium(@Param('id') condominiumId: string) {
    const condominiumExists = await this.appService.findCondominiumById(
      condominiumId,
    );

    if (!condominiumExists) {
      throw new BadRequestException('This condominium doesnt exists');
    }

    return this.appService.deleteCondominium(condominiumId);
  }

  @Get('syndicates')
  getSyndicates() {
    return this.appService.getSyndicates();
  }
}
