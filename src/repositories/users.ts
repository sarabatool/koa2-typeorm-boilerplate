import { getRepository } from 'typeorm';
import { Users } from '../entities/users';


export const getAll = async () => {
    return getRepository(Users).find();
};

export const loginUser = async (users: Users) => {
    return getRepository(Users).find({
        where:{
            email: users.email,
            password: users.password
        }
    });
};

export const findUser = async (users: Users) => {
    return getRepository(Users).findOne({
        where: {
            email: users.email,
        }
    });
};

export const findUserWithPassword = async (users: Users) => {
    return await getRepository(Users).findOne({
        where: {
            email: users.email,
            password: users.checkIfUnencryptedPasswordIsValid(users.password)
        }
    });
};

export const registerUser = async (users: Users) => {
        return getRepository(Users).save(users);
};
