import { DeepPartial } from '@reduxjs/toolkit';
import { StateSchema } from 'app/providers/StoreProvider';
import { getCounterValue } from './getCounterValue';

describe('getCounter', () => {
  test('should return counter value', () => {
    const mockState: DeepPartial<StateSchema> = {
      counter: {
        value: 10,
      },
    };

    expect(getCounterValue(mockState as StateSchema)).toBe(10);
  });
});
