import {Injectable} from '@angular/core';
import {Actions, Effect, ofType} from '@ngrx/effects';
import {Observable} from 'rxjs';
import {Action} from '@ngrx/store';
import {map, switchMap} from 'rxjs/operators';
import {TodoService} from '../services/todo.service';
import {LoadAction} from '../actions/todo.actions';

@Injectable()
export class TodoEffects {
  constructor(private readonly todoService: TodoService,
              private readonly actions$: Actions) {}

  @Effect()
  $getTodos: Observable<Action> = this.actions$.pipe(
    ofType('LOAD_TODOS'),
    switchMap(() => this.todoService.getTodos()),
    map(todos => new LoadAction(todos))
  );
}
