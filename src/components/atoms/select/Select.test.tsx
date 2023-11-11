import { describe, it } from 'vitest';
import { fireEvent, render, screen } from '@testing-library/react';
import * as TEST_DATA from '../../../test/testData';
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
  const defaultTextTest = TEST_DATA.text;
  const valueTest = optionsTest[1].value;
  const onChangeTest = vi.fn();
  const classNameTest = TEST_DATA.className;

  it('Have passed value, options, className and onChange work', () => {
    render(
      <Select
        options={optionsTest}
        defaultText={defaultTextTest}
        value={valueTest}
        onChange={onChangeTest}
        className={classNameTest}
      />
    );
    const selectEl = screen.getByRole('combobox');
    const options = screen.getAllByRole('option') as HTMLOptionElement[];

    expect(selectEl).toHaveValue(valueTest);
    expect(screen.getByTestId('select-wrapper')).toHaveClass(classNameTest);
    expect(options).toHaveLength(optionsTest.length + 1);

    // defaul option
    expect(options[0].selected).toBeFalsy();
    expect(options[0].disabled).toBeTruthy();
    // activ option
    expect(options[1].selected).toBeFalsy();
    expect(options[2].selected).toBeTruthy();
    expect(options[3].selected).toBeFalsy();

    fireEvent.change(screen.getByRole('combobox'), optionsTest[0].text);
    expect(onChangeTest).toHaveBeenCalledTimes(1);
  });

  it('Works without unnecessary props', () => {
    render(
      <Select options={optionsTest} value={valueTest} onChange={onChangeTest} />
    );
    const selectEl = screen.getByRole('combobox');
    const options = screen.getAllByRole('option') as HTMLOptionElement[];

    expect(selectEl).toHaveValue(valueTest);
    expect(options).toHaveLength(optionsTest.length);
  });
});
