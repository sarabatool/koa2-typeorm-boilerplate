import { getRepository } from "typeorm";
import { Heroes } from "../entities/heroes";



export const save = async (hero: Heroes) => {

    return getRepository(Heroes).save(hero);
}