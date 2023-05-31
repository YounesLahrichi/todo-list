import { Component, Input, OnInit, EventEmitter, Output } from '@angular/core';
import { TodoItem } from './interfaces/todo-item';

@Component({
  selector: 'app-todo-item',
  template: `
    <div class="todo-item">
    <input type="checkbox"
         class="todo-checkbox"
         (click)="completeItem()"
         [checked]="item.completed"/>
        <span class="todo-title" [ngClass]="{'todo-complete': item.completed}">
          <input type="text"
          #updateElementRef
          [value]="item.title"
          (keyup.enter)="submitValue(getInputValue($event))">
        </span>
      <button class=" btn btn-blue" (click)="submitValue(getInputValue($event))">
        edit
      </button>
     <button class="btn btn-red" (click)="removeItem()">
      remove
    </button>
    </div>
  `,
  styleUrls: ['./todo-item.component.scss']
})
export class TodoItemComponent implements OnInit{
  @Input() item: TodoItem;
  @Output() update: EventEmitter<any> = new EventEmitter<any>();
  @Output() remove: EventEmitter<TodoItem> = new EventEmitter<TodoItem>();
  @Output() submit: EventEmitter<string> = new EventEmitter<string>();

  completeItem(): void {
    this.update.emit({
      item: this.item,
      changes: {completed: !this.item.completed}
    });
  }
  submitValue(newTitle: string) {
    this.submit.emit(newTitle);
  }
  getInputValue(event: Event) {
    return (event.target as HTMLInputElement).value;
  }
  constructor() { }

  ngOnInit(): void { }

  removeItem(): void {
    this.remove.emit(this.item);
  }
}
