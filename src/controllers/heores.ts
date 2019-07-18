import * as service from '../services/heroes';
import { Context } from 'koa';
import { IHeroRequest } from '../interfaces/heroes';
 
export const getAll =async (ctx: Context, next: () => void) => {
    ctx.state.data = await service.getAll();
    await next();
};

export const save =async (ctx: Context, next: () => void) => {
    const id: string = ctx.params.id;
    const payload : IHeroRequest = ctx.request.body;
    ctx.state.data = await service.addHero(payload);
    await next();
};

export const deleteHero = async (ctx: Context, next: () => void) => {
    const id: number = ctx.params.id;
    ctx.state.data = await service.deleteHero(id);
    await next();
}


