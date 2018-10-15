import { Action } from "@ngrx/store";
import { Todo } from "./model/todo.model";

export const ADD_TODO = "[Todo] add todo"
export const TOGGLE_TODO = "[Todo] toggle todo"
export const TOGGLE_ALL_TODO = "[Todo] all toggle todo"
export const EDIT_TODO = "[Todo] edit todo"
export const DELETE_TODO = "[Todo] delete todo"
export const CLEAR_TODOS_COMPLETED = "[Todo] clear todos completed"

export class AddTodoAction implements Action{
    readonly type = ADD_TODO
    constructor(public text: string){}
}

export class ToggleTodoAction implements Action{
    readonly type = TOGGLE_TODO
    constructor(public id: string) {}
}

export class ToggleAllTodoAction implements Action{
    readonly type = TOGGLE_ALL_TODO
    constructor(public completed: boolean) {}
}

export class EditTodoAction implements Action{
    readonly type = EDIT_TODO
    constructor(public id: string, public text: string) {}
}

export class DeleteTodoAction implements Action{
    readonly type = DELETE_TODO
    constructor(public id: string) {}
}

export class ClearTodosCompletedAction implements Action{
    readonly type = CLEAR_TODOS_COMPLETED
}

export type actions = AddTodoAction |
                    ToggleTodoAction |
                    ToggleAllTodoAction |
                    EditTodoAction |
                    DeleteTodoAction |
                    ClearTodosCompletedAction