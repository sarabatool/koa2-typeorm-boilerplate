import { Context } from 'koa';
import * as service from '../services/heroes';
import {IHeroRequest} from "../interfaces/hero"

export const save = async(ctx: Context, next:()=>void) =>{

    const id: string = ctx.params.id;
    const payload: IHeroRequest = ctx.params.payload;
    return service.addHero(payload);
};