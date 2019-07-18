import { Injectable } from '@angular/core';
import { Store, Select } from '@ngxs/store';
import { TodoState } from '../../store/todo/todo.state';
import { Add, Remove, ClearAll } from '../../store/todo/todo.actions';
import { Todo } from '../../models/todo';
import { Observable } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class TodoService {

  @Select(TodoState.getTodoList) todoList$: Observable<Todo[]>;

  constructor(private store: Store) { }

  add(todo: Todo) {
    this.store.dispatch(new Add(todo));
  }

  remove(todoId: number) {
    this.store.dispatch(new Remove(todoId));
  }

  clearAll() {
    this.store.dispatch(new ClearAll());
  }
}

