import { Controller, Get } from '@nestjs/common';
import { SyndicatesService } from '../services/syndicates.service';

@Controller('syndicates')
export class SyndicatesController {
  constructor(private readonly appService: SyndicatesService) {}

  @Get()
  getSyndicates() {
    return this.appService.getSyndicates();
  }
}
