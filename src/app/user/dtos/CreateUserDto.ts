import { IsEmail, IsNotEmpty } from 'class-validator';
import { Role } from 'src/core/types/IUser';

export class CreateUserDto {
  @IsEmail()
  @IsNotEmpty()
  email: string;

  @IsNotEmpty()
  password: string;

  @IsNotEmpty()
  name: string;

  @IsNotEmpty()
  role: Role;
}
