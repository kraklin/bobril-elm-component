import * as b from 'bobril';

interface IData{
    src: IElm;
    flags?: any;
    ports?: (elmPorts: any) => void;
}

interface IElm{
    embed: (element:Node|Node[], flags: any)=>any;
}

interface ICtx extends b.IBobrilCtx{
    data: IData;
    elmApp: any;
}

export const create = b.createComponent<IData>({
    postInitDom(ctx:ICtx, me:b.IBobrilCacheNode){
        ctx.elmApp = ctx.data.src.embed(me.element, ctx.data.flags);
    
        if(ctx.data.ports !== undefined)
        {
            ctx.data.ports(ctx.elmApp.ports);
        }
    }
})