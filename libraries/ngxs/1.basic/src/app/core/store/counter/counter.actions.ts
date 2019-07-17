export class Add {
  static readonly type = '[Counter] Add';
  constructor(public value: number) { }
}

export class AddRandom {
  static readonly type = '[Counter] Add Random';
}

export class Subtract {
  static readonly type = '[Counter] Subtract';
  constructor(public value: number) { }
}

export class Reset {
  static readonly type = '[Counter] Reset';
}

