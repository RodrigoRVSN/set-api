import { Module } from '@nestjs/common';
import { JwtModule } from '@nestjs/jwt';
import { PrismaService } from 'src/core/database/db.service';
import { jwtConstants } from 'src/core/utils/auth/constants';
import { CondominiumController, SyndicatesController } from './controllers';
import { CondominiumService, SyndicatesService } from './services';

@Module({
  imports: [
    JwtModule.register({
      secret: jwtConstants.secret,
      signOptions: { expiresIn: '7d' }, // 7 days
    }),
  ],
  controllers: [CondominiumController, SyndicatesController],
  providers: [CondominiumService, SyndicatesService, PrismaService],
})
export class CondominiumModule {}
