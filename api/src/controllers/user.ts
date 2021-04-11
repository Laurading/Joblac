import UserRepository from "../repositories/user";
import UserValidator from "../validators/user";
import { validate } from "class-validator";
import isEmail from "validator";

exports.register = async (req: any, res: any) => {
  const userValid: UserValidator = new UserValidator(
    req.body.email,
    req.body.username,
    req.body.password,
    req.body.firstname,
    req.body.lastname,
    req.body.adress,
    req.body.city,
    req.body.zipcode
  );

  const err = await validate(userValid);
  if (err.length > 0) {
    let errors = {};
    /*err.map((oneError) => {
      errors = {
        ...errors,
        [oneError.property]:
          oneError.constraints[Object.keys(oneError.constraints)[0]],
      };
    });*/
    return { status: 412, data: errors };
  }

  try {
    const UserRepo = new UserRepository();
    const response = await UserRepo.create(req.body);
    res.status(201).send("User created");
  } catch (error: any) {
    throw new Error(error);
  }
};

exports.getUser = async (req: any, res: any) => {
  /*if( !isEmail(req.params.email )){
    return throw new Error("Ce n'est pas un email");
  }*/

  try {
    const UserRepo: UserRepository = new UserRepository();
    const response = await UserRepo.getByEmail(req.params.email);
    res.status(200).send(response);
  } catch (error: any) {
    throw new Error(error);
  }
};

exports.getAllUsers = async (req: any, res: any) => {
  try {
    const UserRepo: UserRepository = new UserRepository();
    const response = await UserRepo.getAll();
    res.status(200).send(response);
  } catch (err: any) {
    throw new Error(err);
  }
};
