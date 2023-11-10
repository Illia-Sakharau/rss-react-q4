import { describe, it } from 'vitest';
import { fireEvent, render, screen } from '@testing-library/react';
import Button from './Button';

describe('Button', () => {
  const testText = 'Test text';
  let testData = '';

  beforeEach(() => {
    render(
      <Button
        onClick={() => {
          testData = testText;
        }}
        disabled={false}
        className="test"
      >
        {testText}
      </Button>
    );
  });

  it('Text correct', () => {
    expect(screen.getByRole('button')).toHaveTextContent(testText);
  });

  it('onClick work', () => {
    const buttonEl = screen.getByRole('button');

    expect(testData).toBe('');
    fireEvent.click(buttonEl);
    expect(testData).toBe(testText);
  });
});
