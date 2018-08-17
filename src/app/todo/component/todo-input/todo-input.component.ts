import { Component, OnInit, OnDestroy } from '@angular/core';
import { Store, select } from '@ngrx/store';
import { TODO, Status } from '../../models/todo.model';
import { TodoActionType } from '../../actions/todo.actions';
import { FormBuilder, FormGroup, AbstractControl, Validators, FormControl } from '@angular/forms';
import { Observable, Subscription } from 'rxjs';

interface TodoState {
  todo: TODO[];
}

@Component({
  selector: 'app-todo-input',
  templateUrl: './todo-input.component.html',
  styleUrls: ['./todo-input.component.css']
})
export class TodoInputComponent implements OnInit, OnDestroy {

  statuses: string[] = [];
  form: FormGroup;
  description: AbstractControl;
  status: AbstractControl;
  priority: AbstractControl;
  $listTodo: TODO[];
  $listTodoSub: Subscription;

  constructor(private readonly store: Store<TodoState>,
              private readonly formBuilder: FormBuilder) {
    this.statuses = Object.keys(Status);
    this.$listTodoSub = (this.store.pipe(
      select('todo')
    )).subscribe($todoList => this.$listTodo = $todoList);
  }

  ngOnInit() {
    this.form = this.formBuilder.group({
      description: new FormControl('', Validators.compose([Validators.required])),
      status: new FormControl(Status.TODO, Validators.compose([Validators.required])),
      priority: new FormControl(0, Validators.compose([Validators.required]))
    });
    this.description = this.form.get('description');
    this.status = this.form.get('status');
    this.priority = this.form.get('priority');
  }

  ngOnDestroy() {
    this.$listTodoSub.unsubscribe();
  }

  getLastId(): number {
    console.log('list', this.$listTodo);
    const {id: lastID} = this.$listTodo[this.$listTodo.length - 1] || {id: 0};
    return lastID + 1;
  }

  onAddTodo() {
    const payload: TODO = this.form.getRawValue();
    payload['id'] = this.getLastId();
    this.store.dispatch({type: TodoActionType.ADD, payload });
  }

}
