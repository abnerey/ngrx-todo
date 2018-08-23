import {NgModule} from '@angular/core';
import {StoreModule} from '@ngrx/store';
import {DummyReducer} from './todo/reducers/todo.reducer';

@NgModule({
  imports: [
    StoreModule.forFeature('another', {})
  ]
})
export class DummyModule {
}
