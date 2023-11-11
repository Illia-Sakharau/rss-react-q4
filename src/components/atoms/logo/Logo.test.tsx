import { describe, it } from 'vitest';
import { render, screen } from '@testing-library/react';
import Logo from './Logo';
import { MemoryRouter } from 'react-router-dom';

describe('Logo', () => {
  const classNameTest = 'test-class';

  it('Have passed className', () => {
    render(
      <MemoryRouter>
        <Logo className={classNameTest} />
      </MemoryRouter>
    );
    expect(screen.getByText('exhi')).toBeInTheDocument();
    expect(screen.getByRole('link')).toHaveClass(classNameTest);
  });

  it('Works without unnecessary props', () => {
    render(
      <MemoryRouter>
        <Logo />
      </MemoryRouter>
    );

    expect(screen.getByText('exhi')).toBeInTheDocument();
  });
});
