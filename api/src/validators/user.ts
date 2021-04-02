import {
  ValidateIf,
  Length,
  IsNumber,
  IsString,
  IsEmail,
} from "class-validator";
export default class UserValidator {
  constructor(
    email: string,
    username: string,
    password: string,
    firstname: string,
    lastname: string,
    adress: string,
    city: string,
    zipcode: number
  ) {
    this.email = email;
    this.username = username;
    this.password = password;
    this.firstname = firstname;
    this.lastname = lastname;
    this.adress = adress;
    this.city = city;
    this.zipcode = zipcode;
  }

  @IsEmail()
  email: string;

  @Length(3, 15)
  @IsString()
  username: string;

  @Length(8, 25)
  password: string;

  @Length(3, 15)
  @IsString()
  firstname: string;

  @Length(3, 15)
  @IsString()
  lastname: string;

  @Length(8, 55)
  adress: string;

  @Length(3, 25)
  @IsString()
  city: string;

  @Length(5, 5)
  @IsNumber()
  zipcode: number;
}
