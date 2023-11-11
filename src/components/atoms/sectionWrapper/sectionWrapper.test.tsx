import { describe, it } from 'vitest';
import { render, screen } from '@testing-library/react';
import * as TEST_DATA from '../../../test/testData';
import SectionWrapper from './sectionWrapper';

describe('Input', () => {
  const textTest = TEST_DATA.text;
  const childrenTest = <TEST_DATA.element.reactEl />;
  const classNameTest = TEST_DATA.className;

  it('Have passed className and child', () => {
    render(
      <SectionWrapper className={classNameTest}>{childrenTest}</SectionWrapper>
    );

    expect(screen.getByTestId(TEST_DATA.element.id)).toHaveTextContent(
      TEST_DATA.element.text
    );
    expect(screen.getByTestId('section-wrapper')).toHaveClass(classNameTest);
  });

  it('Works without unnecessary props', () => {
    render(<SectionWrapper>{textTest}</SectionWrapper>);

    expect(screen.getByText(textTest)).toBeInTheDocument();
  });
});
