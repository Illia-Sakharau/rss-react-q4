import { describe, it } from 'vitest';
import { fireEvent, render, screen } from '@testing-library/react';
import Button from './Button';

describe('Button', () => {
  const testText = 'Test text';
  const testClassName = 'test-class';
  const onClickTest = vi.fn();

  it('Have passed text and class, disabled', () => {
    render(
      <Button onClick={() => {}} disabled={true} className={testClassName}>
        {testText}
      </Button>
    );
    expect(screen.getByRole('button')).toHaveTextContent(testText);
  });

  it('onClick work', () => {
    render(<Button onClick={onClickTest}>{testText}</Button>);
    expect(onClickTest).toHaveBeenCalledTimes(0);
    fireEvent.click(screen.getByRole('button'));
    expect(onClickTest).toHaveBeenCalledTimes(1);
  });

  it('Work without className', () => {
    render(<Button onClick={() => {}}>{testText}</Button>);
    expect(screen.getByRole('button')).toBeInTheDocument();
  });
});
