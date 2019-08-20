import * as repo from '../repositories/users';
import * as joi from 'joi';
import { IUserRegisterRequest, IUserLoginRequest } from '../interfaces/user';
import { Users } from '../entities/users';
import * as Boom from 'boom';
import * as bcrypt from 'bcryptjs';
import * as jwt from 'jsonwebtoken';

export const getAll = async () => {
    return repo.getAll();
};

export const registerUser = async (user: IUserRegisterRequest) => {
    await joi.validate(user, {
        name: joi.string().required(),
        email: joi.string().required(),
        password: joi.string().required(),
    });

    const toSaveUser = new Users();
    toSaveUser.name = user.name;
    toSaveUser.email = user.email;
    toSaveUser.password = await bcrypt.hash(user.password, 10);

    const value = await repo.findUser(toSaveUser);
    if (value) {
        throw Boom.badRequest('User already exist');
    } else {
        return repo.registerUser(toSaveUser);
    }
}

export const loginUser = async (user: IUserLoginRequest) => {
    await joi.validate(user, {
        email: joi.string().required(),
        password: joi.string().required()
    });
    const toLoginUser = new Users();
    toLoginUser.email = user.email;
    try {
        const userFromRepo = await repo.findUser(toLoginUser);
        if (userFromRepo) {
            const loginUser = userFromRepo as Users;
            if (loginUser.checkIfUnencryptedPasswordIsValid(user.password)) {
                return jwt.sign({ email: user.email }, 'secret');
            } else {
                Boom.unauthorized('Username or password is invalid');
            }
        }


    } catch (error) {
        Boom.unauthorized('Username or password is invalid');
    }
}
