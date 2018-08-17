import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { TodoListComponent } from './todo/component/todo-list/todo-list.component';
import { TodoInputComponent } from './todo/component/todo-input/todo-input.component';
import { StoreModule } from '@ngrx/store';
import { TodoReducer } from './todo/reducers/todo.reducer';
import {MaterialImplModule} from './shared/material-impl.module';

@NgModule({
  declarations: [
    AppComponent,
    TodoListComponent,
    TodoInputComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    StoreModule.forRoot({
      todo: TodoReducer
    }),
    MaterialImplModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
