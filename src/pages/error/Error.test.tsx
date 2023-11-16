import { describe, it } from 'vitest';
import { render, screen } from '@testing-library/react';
import Error from './Error';

describe('Error page', () => {
  it('Have text and reload button', async () => {
    render(<Error />);

    expect(screen.getByText('Error Page')).toBeInTheDocument();
    expect(
      screen.getByRole('button', { name: 'Reload page' })
    ).toBeInTheDocument();
  });
});
