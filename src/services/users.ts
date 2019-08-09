import * as joi from 'joi';
import * as boom from 'boom';
import * as repo from '../repositories/users';
import { IUserRequest } from '../interfaces/user';
import { Users } from '../entities/users';

export const getAll = async() => {
  return repo.getAll();
};

export const addUser = async(user: IUserRequest) => {
  await joi.validate(user, {
      name: joi.string().required(),
      email: joi.string().required(),
      password: joi.string().required()
  });
  const existingUsers = await repo.getByEmail(user.email);
  if(existingUsers.length > 0) {
        throw boom.badRequest("Email id already exists");
  }
  const newUser = new Users();
  newUser.name = user.name;
  newUser.email = user.email;
  newUser.password = user.password;
  return repo.save(newUser);
};
