import * as repo from "../repositories/heroes";
import { Heroes } from "../entities/heroes";
import { join } from "path";
import { IHeroRequest} from "../interfaces/hero"
 
export const getAll = async () => {

   // repo.getAll();
}
export const addHero = async (hero: IHeroRequest) => {

    const toSaveHero = new Heroes();
    toSaveHero.name = hero.name;
    return repo.save(toSaveHero);
}
