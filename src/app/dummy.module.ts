import {NgModule} from '@angular/core';
import {StoreModule} from '@ngrx/store';
import {Another, DummyReducer} from './todo/reducers/todo.reducer';

@NgModule({
  imports: [
    StoreModule.forFeature('another', {
      another: Another
    })
  ]
})
export class DummyModule {
}
