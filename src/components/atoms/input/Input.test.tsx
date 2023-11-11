import { describe, it } from 'vitest';
import { fireEvent, render, screen } from '@testing-library/react';
import Input from './Input';

describe('Input', () => {
  const classNameTest = 'test-class';
  const typeTest = 'text';
  const valueTest = 'Test value';
  const placeholderTest = 'Test placeholder';
  const onChangeTest = vi.fn();

  it('Have passed value, placeholder, className and additional element', () => {
    render(
      <Input
        type={typeTest}
        value={valueTest}
        placeholder={placeholderTest}
        className={classNameTest}
        onChange={onChangeTest}
      />
    );

    const inputEl = screen.getByRole('textbox');

    expect(inputEl).toHaveValue(valueTest);
    expect(screen.getByPlaceholderText(placeholderTest)).toBeInTheDocument();
    expect(inputEl).toHaveClass(classNameTest);

    fireEvent.change(inputEl, { target: { value: '123' } });
    expect(onChangeTest).toHaveBeenCalledTimes(1);
  });

  it('Works without unnecessary props', () => {
    render(<Input type={typeTest} value={valueTest} />);

    expect(screen.getByRole('textbox')).toBeInTheDocument();
  });
});
