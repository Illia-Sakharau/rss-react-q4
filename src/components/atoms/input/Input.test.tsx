import { describe, it } from 'vitest';
import { fireEvent, render, screen } from '@testing-library/react';
import * as TEST_DATA from '../../../test/testData';
import Input from './Input';

describe('Input', () => {
  const classNameTest = TEST_DATA.className;
  const typeTest = 'text';
  const valueTest = TEST_DATA.value;
  const placeholderTest = TEST_DATA.placeholder;
  const onChangeTest = vi.fn();

  it('Have passed value, placeholder, className and onChance work', () => {
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

    fireEvent.change(inputEl, { target: { value: '' } });
    expect(onChangeTest).toHaveBeenCalledTimes(1);
  });

  it('Works without unnecessary props', () => {
    render(<Input type={typeTest} value={valueTest} />);

    expect(screen.getByRole('textbox')).toBeInTheDocument();
  });
});
