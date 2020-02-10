import { User } from '@core/entities'
import {IsEmail, IsString, IsNumber, IsNotEmpty, IsInt} from 'class-validator';
import { MinLength, MaxLength, Min } from 'class-validator';

export class UserSchema implements User {
  @IsString()
  @MinLength(3)
  @MaxLength(16)
  name: string;

  @IsString()
  @MinLength(3)
  @MaxLength(12)
  surname: string;

  @IsString()
  @IsNotEmpty()
  gender: string;

  @IsEmail()
  email: string;

  @IsInt()
  @Min(18)
  age: number;
}
