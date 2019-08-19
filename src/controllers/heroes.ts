import * as service from '../services/heroes';
import { Context } from 'koa';
import { IHeroRequest, IHeroRequestUpdate } from '../interfaces/hero';

export const getAll = async (ctx: Context, next : () => void) => {
    ctx.state.data = await service.getAll();
    await next();
};


export const registerHero = async (ctx: Context, next : () => void) => {
    const payload: IHeroRequest = ctx.request.body;
    ctx.state.data = await service.registerHero(payload);
    await next();
};

export const remove = async (ctx: Context, next: () => void) => {
    const id = ctx.params.id;
    
    ctx.state.data = await service.removeHero(id);
    await next();
}

export const update = async (ctx: Context, next : () => void) => {
    const payload: IHeroRequestUpdate = ctx.request.body;
    ctx.state.data = await service.updateHero(payload);
    await next();
};

export const getUser = async (ctx: Context, next : () => void) => {
    const payload: IHeroRequest = ctx.request.body;
    ctx.state.data = await service.getHero(payload);
    await next();
};