import { Action } from '@ngrx/store';
import { TODO } from '../models/todo.model';

export abstract class TodoActionType {
    static readonly ADD = 'ADD';
    static readonly REMOVE = 'REMOVE';
    static readonly UPDATE = 'UPDATE';
}

export class AddAction implements Action {
    readonly type = TodoActionType.ADD;

    constructor(public payload: TODO) {}
}

export class RemoveAction implements Action {
    readonly type = TodoActionType.REMOVE;

    constructor(public payload: TODO) {}
}

export class UpdateAction implements Action {
    readonly type = TodoActionType.UPDATE;

    constructor(public payload: TODO) {}
}

export type TODOActionsUnion =
    | AddAction
    | RemoveAction
    | UpdateAction;
