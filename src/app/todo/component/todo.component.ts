import { Component, OnInit } from "@angular/core";
import { TodoState } from "../state/todo.state";
import { Store, select } from "@ngrx/store";
import { TODO } from "../models/todo.model";
import { Observable, of } from "rxjs";
import { TodoActionType } from "../actions/todo.actions";

@Component({
    selector: 'app-todo',
    templateUrl: './todo.component.html',
    styleUrls: ['./todo.component.scss']
})
export class TodoComponent implements OnInit {

    todoSlice: Observable<TODO[]>;

    constructor(private readonly store: Store<TodoState>) {}

    ngOnInit() {
        this.store.pipe(
            select('todo')
        ).subscribe(value => {
            if (value) {
                this.todoSlice = of(value);                
            }
        })
    }

    onAddTodo(todo: TODO) {
        this.store.dispatch({type: TodoActionType.ADD, payload: todo });
    }

    onRemoveTodo(todo: TODO) {
        this.store.dispatch({type: TodoActionType.REMOVE});
    }

    onUpdateTodo(todo: TODO) {
        this.store.dispatch({type: TodoActionType.UPDATE});
    }
}