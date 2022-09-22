import {
  BadRequestException,
  Body,
  Controller,
  Get,
  Post,
} from '@nestjs/common';
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

  @Get('syndicates')
  getSyndicates() {
    return this.appService.getSyndicates();
  }
}
