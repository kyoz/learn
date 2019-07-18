import { Component } from '@angular/core';
import { TodoService } from './todo.service';

@Component({
  selector: 'todo',
  template: `
    <h2>Todo</h2>
    <hr>

    <div>
      New todo: <input #newTodo>
      <button (click)="add(newTodo.value)">Add</button>
    </div>

    <ol>
      <li *ngFor="let todo of todo.todoList$ | async">
        <button (click)="remove(todo.id)">X</button> {{ todo.content }} ({{ todo.createdTime }})
      </li>
    </ol>

    <div>
      <button (click)="clearAll()">Clear all todo</button>
    </div>
  `
})
export class TodoComponent {
  constructor(private todo: TodoService) {
  }

  add(content: string) {
    this.todo.add({
      id: +new Date(),
      content,
      createdTime: new Date()
    });
  }

  remove(todoId: number) {
    this.todo.remove(todoId);
  }

  clearAll() {
    this.todo.clearAll();
  }
}

