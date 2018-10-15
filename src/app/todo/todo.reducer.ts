import * as fromTodo from "./todo.action";
import { Todo } from './model/todo.model';
import { CLEAR_TODOS_COMPLETED } from './todo.action';

const todo1 = new Todo('Tarea 1')
const todo2 = new Todo('Tarea 2')
const todo3 = new Todo('Tarea 3')
const todo4 = new Todo('Tarea 4')

todo1.completed = true

const initialState: Todo[] = [
    todo1,
    todo2,
    todo3,
    todo4
]

export function todoReducer(state = initialState, action: fromTodo.actions): Todo[]{
    switch (action.type) {
        case fromTodo.ADD_TODO: 
            const todo = new Todo(action.text)
            return [...state, todo]
        case fromTodo.TOGGLE_TODO:
            return state.map(todo => {
                if(todo.id===action.id){
                    return {
                        ...todo,
                        completed: !todo.completed
                    }
                }
                return todo
            })
        case fromTodo.TOGGLE_ALL_TODO:
            return state.map(todo => {
                return {
                    ...todo,
                    completed: action.completed
                }
            })
        case fromTodo.EDIT_TODO:
            return state.map(todo => {
                if (todo.id === action.id) {
                    return {
                        ...todo,
                        text: action.text
                    }
                }
                return todo
            })
        case fromTodo.DELETE_TODO:
            return state.filter(todo => todo.id !== action.id)
        case fromTodo.CLEAR_TODOS_COMPLETED:
            return state.filter(todo => !todo.completed)
        default:
            return state
    }
}