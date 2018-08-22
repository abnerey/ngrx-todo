import {Injectable} from '@angular/core';
import {AngularFirestore} from 'angularfire2/firestore';
import {Actions, Effect, ofType} from '@ngrx/effects';
import {Observable} from 'rxjs';
import {Action} from '@ngrx/store';
import {mergeMap} from 'rxjs/operators';

@Injectable()
export class TodoEffects {
  constructor(private readonly db: AngularFirestore,
              private readonly actions$: Actions) {}

  @Effect()
  $getTodos: Observable<Action> = this.actions$.pipe(
    ofType('GETTODO'),
    mergeMap(action => {

    })
  );
}
