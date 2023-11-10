import { describe, it } from 'vitest';
import { render, screen } from '@testing-library/react';
import Logo from './Logo';
import { MemoryRouter } from 'react-router-dom';

describe('Logo', () => {
  const testClassName = 'test-class';

  beforeEach(() => {
    render(
      <MemoryRouter>
        <Logo className={testClassName} />
      </MemoryRouter>
    );
  });

  it('Have text', () => {
    expect(screen.getByText('exhi')).toBeInTheDocument();
  });

  it('Have passed class', () => {
    expect(screen.getByRole('link')).toHaveClass(testClassName);
  });
});
