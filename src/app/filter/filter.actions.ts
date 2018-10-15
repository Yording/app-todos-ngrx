import { Action } from "@ngrx/store";

export const SET_FILTER = '[Filter] set filter'
export type filterAvailable = 'todos' | 'completados' | 'pendientes'

export class SetFilterAction implements Action{
    readonly type = SET_FILTER
    constructor(public filter: filterAvailable) {}
}

export type actions = SetFilterAction