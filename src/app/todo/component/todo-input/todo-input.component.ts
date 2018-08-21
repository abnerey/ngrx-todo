import { Component, OnInit, OnDestroy, Input, Output, EventEmitter, ChangeDetectionStrategy, OnChanges, SimpleChanges } from '@angular/core';
import { TODO, Status } from '../../models/todo.model';
import { FormBuilder, FormGroup, AbstractControl, Validators, FormControl } from '@angular/forms';
import { Subscription, Observable } from 'rxjs';

@Component({
  selector: 'app-todo-input',
  templateUrl: './todo-input.component.html',
  styleUrls: ['./todo-input.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class TodoInputComponent implements OnInit, OnDestroy, OnChanges {
  @Input() todoSlice: Observable<TODO[]>;
  @Output() onAddTodo = new EventEmitter<TODO>();

  statuses: string[] = [];
  form: FormGroup;
  description: AbstractControl;
  status: AbstractControl;
  priority: AbstractControl;
  $listTodo: TODO[];
  $listTodoSub: Subscription;

  constructor(private readonly formBuilder: FormBuilder) {
    this.statuses = Object.keys(Status);
  }

  ngOnInit() {
    this.form = this.formBuilder.group({
      description: new FormControl('', Validators.compose([Validators.required, Validators.maxLength(120), Validators.minLength(10)])),
      status: new FormControl(Status.TODO, Validators.compose([Validators.required])),
      priority: new FormControl(1, Validators.compose([Validators.required, Validators.min(1), Validators.max(10)]))
    });
    this.description = this.form.get('description');
    this.status = this.form.get('status');
    this.priority = this.form.get('priority');
  }

  ngOnDestroy() {
    this.$listTodoSub.unsubscribe();
  }

  ngOnChanges(changes: SimpleChanges) {
    const {todoSlice} = changes;
    if (todoSlice && todoSlice.currentValue) {
      this.$listTodoSub = this.todoSlice.subscribe(listTodo => {
        this.$listTodo = listTodo
      });
    }
  }

  getLastId(): number {
    const {id: lastID} = (this.$listTodo && this.$listTodo[this.$listTodo.length - 1]) || {id: 0};
    return lastID + 1;
  }

  add() {
    const newTodo: TODO = this.form.getRawValue();
    newTodo['id'] = this.getLastId();
    this.onAddTodo.emit(newTodo);
  }

}
