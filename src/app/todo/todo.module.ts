import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {TodoComponent} from './component/todo.component';
import {TodoListComponent} from './component/todo-list/todo-list.component';
import {TodoInputComponent} from './component/todo-input/todo-input.component';
import {StatusPipe} from '../shared/pipes/status.pipe';
import {StoreModule} from '@ngrx/store';
import {DummyReducer, TodoReducer} from './reducers/todo.reducer';
import {TodoEffects} from './effects/todo.effects';
import {CommonModule} from '@angular/common';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {MaterialImplModule} from '../shared/modules/material-impl.module';
import {EffectsModule} from '@ngrx/effects';
import {TodoService} from './services/todo.service';

const routes: Routes = [
  {path: '', component: TodoComponent}
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    MaterialImplModule,
    ReactiveFormsModule,
    RouterModule.forChild(routes),
    StoreModule.forFeature('todo', {
      list: TodoReducer,
      // dummy: DummyReducer
    }),
    EffectsModule.forFeature([
      TodoEffects
    ])
  ],
  declarations: [
    TodoComponent,
    TodoListComponent,
    TodoInputComponent,
    StatusPipe
  ],
  providers: [
    TodoService
  ]
})
export class TodoModule {}
