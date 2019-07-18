import { Todo } from '../../models/todo';

export class Add {
  static readonly type = '[TODO] Add';
  constructor(public todo: Todo) { }
}

export class Remove {
  static readonly type = '[TODO] Remove';
  constructor(public todoId: number) { }
}

export class ClearAll {
  static readonly type = '[TODO] Clear All';
}
