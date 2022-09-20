import { Controller, Get } from '@nestjs/common';
import { CondominiumService } from '../services';

@Controller('condominium')
export class CondominiumController {
  constructor(private readonly appService: CondominiumService) {}

  @Get('syndicates')
  getSyndicates() {
    return this.appService.getSyndicates();
  }
}
