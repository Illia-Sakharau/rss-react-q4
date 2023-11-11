import { describe, it } from 'vitest';
import { fireEvent, render, screen } from '@testing-library/react';
import Select from './Select';

describe('Input', () => {
  const optionsTest = [
    {
      value: 'val1',
      text: 'Option 1',
    },
    {
      value: 'val2',
      text: 'Option 2',
    },
    {
      value: 'val3',
      text: 'Option 3',
    },
  ];
  const defaultTextTest = 'Test default text';
  const valueTest = optionsTest[1].value;
  const onChangeTest = vi.fn();
  const classNameTest = 'test-class';

  beforeEach(() => {
    render(
      <Select
        options={optionsTest}
        defaultText={defaultTextTest}
        value={valueTest}
        onChange={onChangeTest}
        className={classNameTest}
      />
    );
  });

  it('Value', () => {
    expect(screen.getByRole('combobox')).toHaveValue(valueTest);
  });

  it('Options', () => {
    const options = screen.getAllByRole('option') as HTMLOptionElement[];
    expect(options).toHaveLength(optionsTest.length + 1);

    // defaul option
    expect(options[0].selected).toBeFalsy();
    expect(options[0].disabled).toBeTruthy();

    // activ option
    expect(options[1].selected).toBeFalsy();
    expect(options[2].selected).toBeTruthy();
    expect(options[3].selected).toBeFalsy();
  });

  it('Value', () => {
    expect(screen.getByRole('combobox')).toHaveValue(valueTest);
  });

  it('Class name', () => {
    expect(screen.getByTestId('select-wrapper')).toHaveClass(classNameTest);
  });

  it('Change option', () => {
    fireEvent.change(screen.getByRole('combobox'), optionsTest[0].text);

    expect(onChangeTest).toHaveBeenCalledTimes(1);
  });
});
