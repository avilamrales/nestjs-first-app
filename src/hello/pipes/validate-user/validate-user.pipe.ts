import {
  HttpException,
  HttpStatus,
  Injectable,
  PipeTransform,
} from '@nestjs/common';

interface UserDto {
  age: number | string;
  [key: string]: any;
}

@Injectable()
export class ValidateUserPipe implements PipeTransform {
  transform(value: UserDto): UserDto {
    const ageNumber = parseInt(value.age.toString(), 10);

    if (isNaN(ageNumber)) {
      throw new HttpException('Age must be a number', HttpStatus.BAD_REQUEST);
    }

    return {
      ...value,
      age: ageNumber,
    };
  }
}
