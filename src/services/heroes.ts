import * as repo from '../repositories/heroes';
import { IHeroRequest, IHeroRequestUpdate } from '../interfaces/hero';
import { Heroes } from '../entities/heroes';
import * as joi from 'joi';

export const getAll = async () => {
    return repo.getAll();
};

export const registerHero = async (hero: IHeroRequest) => {
    await joi.validate(hero, {
        name: joi.string().required(),
    });
    const toSaveHero = new Heroes();
    toSaveHero.name = hero.name;
    return repo.registerHero(toSaveHero);
}

export const removeHero = async (id : number) => {
    // await joi.validate(id, {
    //     id: joi.number().required(),
    // });    
    return repo.remove(id);
}

export const updateHero = async (hero: IHeroRequestUpdate) => {
    await joi.validate(hero, {
        id: joi.number().required(),
        name: joi.string().required(),
    });
    const toSaveHero = new Heroes();
    toSaveHero.id = hero.id;
    toSaveHero.name = hero.name;
    return repo.update(toSaveHero);
}


export const getHero = async (hero: IHeroRequest) => {

    const toGetHero = new Heroes();
    toGetHero.name = hero.name;
    return repo.getHero(toGetHero);
}