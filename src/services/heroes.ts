import * as joi from 'joi';
import * as boom from 'boom';
import * as repo from '../repositories/heroes';
import { IHeroRequest } from '../interfaces/hero';
import { Heroes } from '../entities/heroes';

export const getAll = async() => {
    return repo.getAll();
};

export const addHero = async(hero: IHeroRequest, id?: number) => {
    await joi.validate(hero, {
        name: joi.string().required()
    });
    if (id) {
      const existingHero = await repo.getById(id);
      if (!existingHero) {
        throw boom.badRequest("This hero does not exist");
      }
      existingHero.name = hero.name;
      return repo.save(existingHero);
    } else {
      const toSaveHero = new Heroes();
      toSaveHero.name = hero.name;
      return repo.save(toSaveHero);
    }
};

export const deleteHero = async(id: number) => {
    await joi.validate(id, joi.number().required());
    const hero = await repo.getById(id);
    if(!hero) {
        throw boom.badRequest("This hero does not exist");
    }
    return repo.deleteHero(id);
};
