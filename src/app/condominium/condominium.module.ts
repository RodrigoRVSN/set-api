import { Module } from '@nestjs/common';
import { JwtModule } from '@nestjs/jwt';
import { PrismaService } from 'src/core/database/db.service';
import { jwtConstants } from 'src/core/utils/auth/constants';
import { CondominiumController } from './controllers';
import { CondominiumService } from './services';

@Module({
  imports: [
    JwtModule.register({
      secret: jwtConstants.secret,
      signOptions: { expiresIn: '7d' }, // 7 days
    }),
  ],
  controllers: [CondominiumController],
  providers: [CondominiumService, PrismaService],
})
export class CondominiumModule {}
