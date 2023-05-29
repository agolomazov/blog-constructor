import { counterActions, counterReducer } from './counterSlice';

import { CounterSchema } from '../types/counterSchema';

describe('counterSlice', () => {
  test('test decrement action', () => {
    const mockState: CounterSchema = {
      value: 10,
    };

    expect(
      counterReducer(mockState as CounterSchema, counterActions.decrement)
    ).toEqual({
      value: 9,
    });
  });

  test('test increment action', () => {
    const mockState: CounterSchema = {
      value: 10,
    };

    expect(
      counterReducer(mockState as CounterSchema, counterActions.increment)
    ).toEqual({
      value: 11,
    });
  });

  test('should work with empty state', () => {
    expect(counterReducer(undefined, counterActions.increment)).toEqual({
      value: 1,
    });
  });
});
