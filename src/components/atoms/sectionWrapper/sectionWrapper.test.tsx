import { describe, it } from 'vitest';
import { render, screen } from '@testing-library/react';
import SectionWrapper from './sectionWrapper';

describe('Input', () => {
  const textTest = 'test child';
  const childrenTest = <div data-testid="test">TEST</div>;
  const classNameTest = 'test-class';

  it('Have passed className and child', () => {
    render(
      <SectionWrapper className={classNameTest}>{childrenTest}</SectionWrapper>
    );

    expect(screen.getByTestId('test')).toHaveTextContent('TEST');
    expect(screen.getByTestId('section-wrapper')).toHaveClass(classNameTest);
  });

  it('Works without unnecessary props', () => {
    render(<SectionWrapper>{textTest}</SectionWrapper>);

    expect(screen.getByText(textTest)).toBeInTheDocument();
  });
});
