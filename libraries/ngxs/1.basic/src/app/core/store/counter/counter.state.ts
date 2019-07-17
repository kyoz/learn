import { State, Action, Selector, StateContext } from '@ngxs/store';
import { Add, AddRandom, Subtract, Reset } from './counter.actions';

export class CounterStateModel {
  value: number;
}

const defaultState = {
  value: 0
};

@State<CounterStateModel>({
  name: 'counter',
  defaults: defaultState
})

export class CounterState {
  @Selector() static getValue(state: CounterStateModel) {
    return state.value;
  }

  @Action(Add)
  add(context: StateContext<CounterStateModel>, action: Add) {
    const state = context.getState();
    context.patchState({
      value: state.value + action.value
    });
  }

  @Action(Subtract)
  subtract(context: StateContext<CounterStateModel>, action: Subtract) {
    const state = context.getState();
    context.patchState({
      value: state.value - action.value
    });
  }

  @Action(AddRandom)
  addRandom(context: StateContext<CounterStateModel>) {
    const state = context.getState();
    const randomValue = Math.floor(Math.random() * 10);
    context.patchState({
      value: state.value + randomValue
    });
  }

  @Action(Reset)
  reset(context: StateContext<CounterStateModel>) {
    context.patchState({ value: 0 });
  }
}

