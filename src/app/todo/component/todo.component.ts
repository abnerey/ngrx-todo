import {Component, OnInit} from '@angular/core';
import {TodoState} from '../state/todo.state';
import {Store, select} from '@ngrx/store';
import {TODO} from '../models/todo.model';
import {Observable, of} from 'rxjs';
import {AddAction, TodoActionType} from '../actions/todo.actions';
import {AngularFirestore} from 'angularfire2/firestore';
import {map} from 'rxjs/operators';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.scss']
})
export class TodoComponent implements OnInit {

  todoSlice: Observable<TODO[]>;

  constructor(private readonly store: Store<TodoState>,
              private readonly db: AngularFirestore) {
  }

  ngOnInit() {
    this.store.pipe(
      select('todo')
    ).subscribe(value => {
      if (value.list) {
        this.todoSlice = of(value.list);
      }
    });
    this.db.collection('todo').snapshotChanges().pipe(
      map(actions => {
        return actions.map(action => {
          // console.log('action', action);
          return ({$id: action.payload.doc.id, ...action.payload.doc.data()});
        });
      })
    ).subscribe(snap => {
      //console.log('snapshot changes', snap);
    });
  }

  onAddTodo(todo: TODO) {
    this.store.dispatch({type: TodoActionType.ADD, payload: todo});
  }

  onRemoveTodo(todo: TODO) {
    this.store.dispatch({type: TodoActionType.REMOVE});
  }

  onUpdateTodo(todo: TODO) {
    this.store.dispatch({type: TodoActionType.UPDATE});
  }
}
