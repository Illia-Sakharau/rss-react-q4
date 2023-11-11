import { describe, it } from 'vitest';
import { render, screen } from '@testing-library/react';
import SectionWrapper from './sectionWrapper';

describe('Input', () => {
  const testText = 'Test text';
  const testClassName = 'test-class';

  beforeEach(() => {
    render(
      <SectionWrapper className={testClassName}>{testText}</SectionWrapper>
    );
  });

  it('Children', () => {
    expect(screen.getByText(testText)).toBeInTheDocument();
  });

  it('Class name', () => {
    expect(screen.getByText(testText)).toHaveClass(testClassName);
  });
});
