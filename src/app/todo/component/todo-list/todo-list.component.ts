import { Component } from '@angular/core';
import { TODO } from '../../models/todo.model';
import { Store, select } from '@ngrx/store';
import { Observable } from 'rxjs';
import { TodoActionType } from '../../actions/todo.actions';

interface TodoState {
  $todo: TODO[];
}

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css']
})
export class TodoListComponent {
  $todoList: Observable<TODO[]>;

  constructor(private store: Store<TodoState>) { 
    this.$todoList = store.pipe(
      select('todo')
    );
  }

  remove(todo: TODO) {
    this.store.dispatch({type: TodoActionType.REMOVE});
  }

  update(todo: TODO) {
    this.store.dispatch({type: TodoActionType.UPDATE});
  }

}
