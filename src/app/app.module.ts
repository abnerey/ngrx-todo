import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { TodoListComponent } from './todo/component/todo-list/todo-list.component';
import { TodoInputComponent } from './todo/component/todo-input/todo-input.component';
import { StoreModule } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { TodoReducer } from './todo/reducers/todo.reducer';
import {MaterialImplModule} from './shared/modules/material-impl.module';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {StatusPipe} from './shared/pipes/status.pipe';
import { TodoComponent } from './todo/component/todo.component';
import { environment } from '../environments/environment';

@NgModule({
  declarations: [
    AppComponent,
    TodoComponent,
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
    StoreDevtoolsModule.instrument({
      maxAge: 25, // Retains last 25 states
      logOnly: environment.production, // Restrict extension to log-only mode
    }),
    MaterialImplModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
