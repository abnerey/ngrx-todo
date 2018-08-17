import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { TodoListComponent } from './todo/component/todo-list/todo-list.component';
import { TodoInputComponent } from './todo/component/todo-input/todo-input.component';
import { StoreModule } from '@ngrx/store';
import { TodoReducer } from './todo/reducers/todo.reducer';
import {MaterialImplModule} from './shared/modules/material-impl.module';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {StatusPipe} from './shared/pipes/status.pipe';

@NgModule({
  declarations: [
    AppComponent,
    TodoListComponent,
    TodoInputComponent,
    StatusPipe
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    StoreModule.forRoot({
      todo: TodoReducer
    }),
    MaterialImplModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
