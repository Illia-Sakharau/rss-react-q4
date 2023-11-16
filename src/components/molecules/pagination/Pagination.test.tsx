import { describe, it } from 'vitest';
import { render, screen } from '@testing-library/react';
import * as TEST_DATA from '../../../test/testData';
import Pagination from './Pagination';
import userEvent from '@testing-library/user-event';
import { FC, ReactElement, useState } from 'react';

let currentPageTest = 1;
const itemsOnPageTest = '10';
const totalPagesTest = 5;
const defaultTextTest = TEST_DATA.text;
const classNameTest = TEST_DATA.className;

const WrapperWithState: FC = (): ReactElement => {
  const [value, setValue] = useState('1');

  const changePage = ((page: string) => {
    currentPageTest = +page;
    setValue(page);
  }) as React.Dispatch<React.SetStateAction<string>>;

  return (
    <div data-testid="test-wrapper">
      <Pagination
        currentPage={+value}
        itemsOnPage={+itemsOnPageTest}
        totalPages={totalPagesTest}
        onChange={changePage}
      />
    </div>
  );
};

describe('Pagination', () => {
  beforeEach(() => {
    currentPageTest = 1;
  });

  it('Have passed classNameTest, defaultText', () => {
    render(
      <Pagination
        currentPage={1}
        itemsOnPage={+itemsOnPageTest}
        totalPages={totalPagesTest}
        onChange={(() => {}) as React.Dispatch<React.SetStateAction<string>>}
        defaultText={defaultTextTest}
        className={classNameTest}
      />
    );
    expect(screen.getByTestId('pagination')).toHaveClass(classNameTest);
    expect(screen.getByText(defaultTextTest)).toBeInTheDocument();
  });

  it('Check button', async () => {
    render(<WrapperWithState />);
    const firstButton = screen.getByRole('button', {
      name: '<<',
    }) as HTMLButtonElement;
    const prevButton = screen.getByRole('button', {
      name: '<',
    }) as HTMLButtonElement;
    const nextButton = screen.getByRole('button', {
      name: '>',
    }) as HTMLButtonElement;
    const lastButton = screen.getByRole('button', {
      name: '>>',
    }) as HTMLButtonElement;

    expect(firstButton).toBeInTheDocument();
    expect(firstButton.disabled).toBeTruthy();
    expect(prevButton).toBeInTheDocument();
    expect(prevButton.disabled).toBeTruthy();

    expect(nextButton).toBeInTheDocument();
    expect(lastButton).toBeInTheDocument();

    await userEvent.click(nextButton);
    expect(currentPageTest).toBe(2);

    await userEvent.click(lastButton);
    expect(currentPageTest).toBe(totalPagesTest);
    expect(nextButton.disabled).toBeTruthy();
    expect(lastButton.disabled).toBeTruthy();

    await userEvent.click(prevButton);
    expect(currentPageTest).toBe(4);

    await userEvent.click(firstButton);
    expect(currentPageTest).toBe(1);
  });

  it('Check select', async () => {
    render(<WrapperWithState />);
    const selectEl = screen.getByRole('combobox');
    const options = screen.getAllByRole('option') as HTMLOptionElement[];

    expect(selectEl).toBeInTheDocument();
    expect(options.length).toBe(totalPagesTest);

    await userEvent.selectOptions(selectEl, `${totalPagesTest}`);

    expect(currentPageTest).toBe(totalPagesTest);
    expect(
      screen.getByRole<HTMLButtonElement>('button', { name: '>' }).disabled
    ).toBeTruthy();
    expect(
      screen.getByRole<HTMLButtonElement>('button', { name: '>>' }).disabled
    ).toBeTruthy();
  });
});
