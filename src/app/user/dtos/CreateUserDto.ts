import { ApiProperty } from '@nestjs/swagger';
import { IsEmail, IsNotEmpty, IsOptional } from 'class-validator';
import { Role } from 'src/core/types/IUser';

export class CreateUserDto {
  @ApiProperty()
  @IsEmail()
  @IsNotEmpty()
  email: string;

  @ApiProperty()
  @IsNotEmpty()
  password: string;

  @ApiProperty()
  @IsOptional()
  phone: string;

  @ApiProperty()
  @IsNotEmpty()
  name: string;

  @ApiProperty({ enum: Role })
  @IsNotEmpty()
  role: Role;
}
