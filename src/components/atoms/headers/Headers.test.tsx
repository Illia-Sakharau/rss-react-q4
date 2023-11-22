import { describe, it } from 'vitest';
import { render, screen } from '@testing-library/react';
import * as TEST_DATA from '../../../test/testData';
import { SectionHeader } from './Headers';

describe('Section header', () => {
  const titleTest = TEST_DATA.title;
  const additionalElemsTest = <TEST_DATA.element.reactEl />;
  const classNameTest = TEST_DATA.className;

  it('Have passed title, class and additional element', () => {
    render(
      <SectionHeader
        additionalElems={additionalElemsTest}
        className={classNameTest}
      >
        {titleTest}
      </SectionHeader>
    );

    expect(screen.getByRole('heading', { level: 3 })).toHaveTextContent(
      titleTest
    );
    expect(screen.getByTestId('section-header-wrapper')).toHaveClass(
      classNameTest
    );
    expect(screen.getByTestId(TEST_DATA.element.id)).toHaveTextContent(
      TEST_DATA.element.text
    );
  });

  it('Works without unnecessary props', () => {
    render(<SectionHeader>{titleTest}</SectionHeader>);

    expect(screen.getByRole('heading', { level: 3 })).toBeInTheDocument();
    expect(screen.getByTestId('section-header-wrapper')).toBeInTheDocument();
  });
});
