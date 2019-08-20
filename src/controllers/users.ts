import * as service from '../services/users';
import { Context } from 'koa';
import { IUserRegisterRequest, IUserLoginRequest } from '../interfaces/user';

export const getAll = async (ctx: Context, next: () => void) => {
    ctx.state.data = await service.getAll();
    await next();
};


export const register = async (ctx: Context, next: () => void) => {
    const payload: IUserRegisterRequest = ctx.request.body;
    ctx.state.data = await service.registerUser(payload);
    await next();
};

export const login = async (ctx: Context, next: () => void) => {
    const payload: IUserLoginRequest = ctx.request.body;
    ctx.state.data = await service.loginUser(payload);
    await next();
};