import { Component, ChangeDetectionStrategy, Input, Output, EventEmitter } from '@angular/core';
import { TODO } from '../../models/todo.model';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class TodoListComponent {
  @Input() todoSlice: Observable<TODO[]>;
  @Output() onRemoveTodo = new EventEmitter<TODO>();
  @Output() onUpdateTodo = new EventEmitter<TODO>();

  onRemove(todo: TODO) {
    this.onRemoveTodo.emit(todo);
  }

  onUpdate(todo: TODO) {
    this.onUpdateTodo.emit(todo);
  }

}
