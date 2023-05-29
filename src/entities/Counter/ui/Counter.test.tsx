import {} from '@testing-library/jest-dom';

import { fireEvent, screen } from '@testing-library/react';

import { componentRender } from 'shared/lib/tests/componentRender/componentRender';
import { Counter } from './Counter';

describe('Button', () => {
  test('Test render', () => {
    componentRender(<Counter />, {
      initialState: { counter: { value: 10 } },
    });
    expect(screen.getByTestId('value-title')).toBeInTheDocument();
  });

  test('Test increment', () => {
    componentRender(<Counter />, {
      initialState: { counter: { value: 10 } },
    });
    const incrementBtn = screen.getByTestId('increment-btn');
    fireEvent.click(incrementBtn);
    expect(screen.getByTestId('value-title')).toHaveTextContent('11');
  });

  test('Test decrement', () => {
    componentRender(<Counter />, {
      initialState: { counter: { value: 10 } },
    });
    const decrementBtn = screen.getByTestId('decrement-btn');
    fireEvent.click(decrementBtn);
    expect(screen.getByTestId('value-title')).toHaveTextContent('9');
  });
});
