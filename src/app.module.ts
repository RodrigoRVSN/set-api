import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { CondominiumModule } from './app/condominium/condominium.module';
import { UserModule } from './app/user/user.module';

@Module({
  imports: [ConfigModule, UserModule, CondominiumModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
