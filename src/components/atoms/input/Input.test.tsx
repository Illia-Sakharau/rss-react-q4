import { describe, it } from 'vitest';
import { render, screen } from '@testing-library/react';
import Input from './Input';

describe('Input', () => {
  const testValue = 'Test value';
  const testPlaceholder = 'Test placeholder';
  const testClassName = 'test-class';

  beforeEach(() => {
    render(
      <Input
        type="text"
        value={testValue}
        placeholder={testPlaceholder}
        className={testClassName}
      />
    );
  });

  it('Value', () => {
    const inputEl = screen.getByRole('textbox');
    expect(inputEl).toHaveValue(testValue);
  });

  it('Placeholder', () => {
    expect(screen.getByPlaceholderText(testPlaceholder)).toBeInTheDocument();
  });

  it('Class name', () => {
    expect(screen.getByRole('textbox')).toHaveClass(testClassName);
  });
});
