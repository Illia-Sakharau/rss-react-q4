import { describe, it } from 'vitest';
import { render, screen } from '@testing-library/react';
import { SectionHeader } from './Headers';

describe('Section header', () => {
  const titleTest = 'Test title';
  const additionalElemsTest = <div data-testid="test">TEST</div>;
  const classNameTest = 'test-class';

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
    expect(screen.getByTestId('test')).toHaveTextContent('TEST');
  });

  it('Works without unnecessary props', () => {
    render(<SectionHeader>{titleTest}</SectionHeader>);

    expect(screen.getByRole('heading', { level: 3 })).toBeInTheDocument();
    expect(screen.getByTestId('section-header-wrapper')).toBeInTheDocument();
  });
});
