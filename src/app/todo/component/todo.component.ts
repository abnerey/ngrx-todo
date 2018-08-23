import {Component, OnInit} from '@angular/core';
import {TodoState} from '../state/todo.state';
import {Store, select} from '@ngrx/store';
import {TODO} from '../models/todo.model';
import {Observable, of} from 'rxjs';
import {LoadTodosAction, TodoActionType} from '../actions/todo.actions';
import {TodoService} from '../services/todo.service';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.scss']
})
export class TodoComponent implements OnInit {

  todoSlice: Observable<TODO[]>;

  constructor(private readonly store: Store<TodoState>,
              private readonly todoService: TodoService) {
  }

  ngOnInit() {
    this.store.pipe(
      select('todo')
    ).subscribe(value => {
      if (value.list) {
        this.todoSlice = of(value.list);
      }
    });
    /*this.todoService.getTodos().subscribe(todoList => {
      console.log('todos', todoList);
    });*/
    this.store.dispatch(new LoadTodosAction());
    /*this.db.collection('todo').snapshotChanges().pipe(
      map(actions => {
        return actions.map(action => {
          // console.log('action', action);
          return ({$id: action.payload.doc.id, ...action.payload.doc.data()});
        });
      })
    ).subscribe(snap => {
      console.log('snapshot changes', snap);
    });*/
  }

  onAddTodo(todo: TODO) {
    this.store.dispatch({type: TodoActionType.ADD, payload: todo});
    // this.store.dispatch(new AddAction(todo));
  }

  onRemoveTodo(todo: TODO) {
    this.store.dispatch({type: TodoActionType.REMOVE});
  }

  onUpdateTodo(todo: TODO) {
    this.store.dispatch({type: TodoActionType.UPDATE});
  }
}
