import { getRepository } from 'typeorm';
import { Heroes } from '../entities/heroes';

export const getAll = async () => {
    return getRepository(Heroes).find({
        where: {
            isActive: true
        },
    });
};

export const registerHero = async (hero: Heroes) => {
    return getRepository(Heroes).save(hero); // upserts data .
    // return getRepository(Heroes).insert(hero);
};

export const remove = async (userId: number) => {
    return getRepository(Heroes).delete(userId);
};

export const update = async (hero: Heroes) => {
    return getRepository(Heroes).save(hero);
};

export const getHero = async (hero: Heroes) => {
    return getRepository(Heroes).find({
        where: {
            name: hero.name
        }
    });
};
