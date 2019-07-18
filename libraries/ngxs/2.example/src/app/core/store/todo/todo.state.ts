import { Action, State, StateContext, Selector } from '@ngxs/store';
import { Add, Remove, ClearAll } from './todo.actions';
import { Todo } from '../../models/todo';
import { LoggerService } from '../../components/logger/logger.service';

export class TodoStateModel {
  todoList: Todo[];
}

@State<TodoStateModel>({
  name: 'todo',
  defaults: {
    todoList: []
  }
})
export class TodoState {
  constructor(private logger: LoggerService) { }

  @Selector()
  static getTodoList(state: TodoStateModel) {
    return state.todoList;
  }

  @Action(Add)
  add({ getState, patchState }: StateContext<TodoStateModel>, { todo }: Add) {
    const todoList = getState().todoList;
    todoList.push(todo);
    patchState({ todoList });
    this.logger.addLog('[LOGGER] Added Todo');
  }

  @Action(Remove)
  remove({ getState, patchState }: StateContext<TodoStateModel>, { todoId }: Remove) {
    let todoList = getState().todoList;
    todoList = todoList.filter(d => d.id !== todoId);

    patchState({
      todoList: todoList || []
    });
    this.logger.addLog('[LOGGER] Removed Todo');
  }

  @Action(ClearAll)
  clearAll({ patchState }: StateContext<TodoStateModel>) {
    patchState({
      todoList: []
    });
    this.logger.addLog('[LOGGER] Cleared All Todos');
  }
}

