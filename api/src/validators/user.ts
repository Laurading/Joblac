import { Length, IsString, IsEmail, IsPostalCode } from "class-validator";
export default class UserValidator {
  constructor(
    email: string,
    password: string,
    checkPassword: string,
    adress: string,
    city: string,
    zipcode: number,
    username: string
  ) {
    this.email = email;
    this.password = password;
    this.adress = adress;
    this.checkPassword = checkPassword;
    this.city = city;
    this.zipcode = zipcode;
    this.username = username;
  }

  @IsEmail()
  email: string;

  @Length(8, 25)
  @IsString()
  password: string;

  @Length(8, 25)
  @IsString()
  checkPassword: string;

  @Length(8, 55)
  @IsString()
  adress: string;

  @Length(3, 25)
  @IsString()
  city: string;

  @IsPostalCode("FR")
  zipcode: number;

  @Length(4, 25)
  @IsString()
  username: string;
}
