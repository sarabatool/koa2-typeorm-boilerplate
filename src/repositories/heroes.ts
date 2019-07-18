import { getRepository } from "typeorm";
import { Heroes } from "../entities/heroes";

export const getAll = async() => {
    return getRepository(Heroes).find({
        where: {
            isActive: true,
        }
    });
};

export const save = async(hero: Heroes) => {
    return getRepository(Heroes).save(hero);
};

export const deleteHero = async(id: number) => {
    return getRepository(Heroes).delete(id);
};

export const getById = async(id: number) => {
    return getRepository(Heroes).findOne({
        where: {
            id: id,
        }
    });
};