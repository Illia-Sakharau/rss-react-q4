import { describe, it } from 'vitest';
import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import * as TEST_DATA from '../../../test/testData';
import Logo from './Logo';

describe('Logo', () => {
  const classNameTest = TEST_DATA.className;

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
