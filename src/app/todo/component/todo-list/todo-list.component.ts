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
  @Output() removeTodo = new EventEmitter<TODO>();
  @Output() updateTodo = new EventEmitter<TODO>();

  onRemove(todo: TODO) {
    this.removeTodo.emit(todo);
  }

  onUpdate(todo: TODO) {
    this.updateTodo.emit(todo);
  }

}
