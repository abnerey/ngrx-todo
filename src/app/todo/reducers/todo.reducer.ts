import { TODO } from '../models/todo.model';
import { TODOActionsUnion, TodoActionType } from '../actions/todo.actions';

const initialState: TODO[] = [];

export function TodoReducer(state: TODO[] = initialState, action: TODOActionsUnion) {
    switch (action.type) {
        case TodoActionType.ADD:
            return [...state, action.payload]

        case TodoActionType.REMOVE:
            return state.filter(todo => todo.id !== action.payload.id);

        case TodoActionType.UPDATE:
            return state.map(todo => {
                if (todo.id === action.payload.id) {
                    return action.payload.id;
                }
                return todo;
            });

        default:
            return state;
    }
}