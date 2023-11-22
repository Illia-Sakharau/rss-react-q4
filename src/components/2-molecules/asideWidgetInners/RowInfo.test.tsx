import { describe, it } from 'vitest';
import { render, screen } from '@testing-library/react';
import * as TEST_DATA from '../../../test/testData';
import RowInfo from './RowInfo';

describe('Row info for aside inner', () => {
  const titleTest = TEST_DATA.title;
  const textTest = TEST_DATA.text;
  const classNameTest = TEST_DATA.className;

  it('Have passed className, title and text', () => {
    render(
      <RowInfo title={titleTest} text={textTest} className={classNameTest} />
    );

    expect(screen.getByTestId('test-row')).toHaveClass(classNameTest);
    expect(screen.getByText(titleTest)).toBeInTheDocument();
    expect(screen.getByText(textTest)).toBeInTheDocument();
  });

  it('Works without unnecessary props', () => {
    render(<RowInfo title={titleTest} text={textTest} />);

    expect(screen.getByTestId('test-row')).toBeInTheDocument();
    expect(screen.getByText(titleTest)).toBeInTheDocument();
    expect(screen.getByText(textTest)).toBeInTheDocument();
  });
});
