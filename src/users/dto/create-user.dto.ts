import { IsEmail, IsNotEmpty, IsNumber, IsString, Max } from 'class-validator';

export class CreateUserDTO {
  @IsNumber()
  @IsNotEmpty()
  id: number;

  @IsString()
  @IsNotEmpty()
  name: string;

  @IsEmail()
  @IsString()
  @IsNotEmpty()
  email: string;

  @IsString()
  @IsNotEmpty()
  password: string;

  @IsNumber()
  @Max(120)
  @IsNotEmpty()
  age: number;
}
