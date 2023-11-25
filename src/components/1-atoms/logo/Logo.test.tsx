import { describe, it } from 'vitest';
import { render, screen } from '@testing-library/react';
import * as TEST_DATA from '../../../test/testData';
import Logo from './Logo';

describe('Logo', () => {
  const classNameTest = TEST_DATA.className;

  it('Have passed className', () => {
    render(<Logo className={classNameTest} />);
    expect(screen.getByText('exhi')).toBeInTheDocument();
    expect(screen.getByRole('link')).toHaveClass(classNameTest);
  });

  it('Works without unnecessary props', () => {
    render(<Logo />);
    expect(screen.getByText('exhi')).toBeInTheDocument();
  });
});
