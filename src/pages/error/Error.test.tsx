import { describe, it } from 'vitest';
import { render, screen } from '@testing-library/react';
import Error from './Error';
import userEvent from '@testing-library/user-event';

describe('Loader', () => {
  it('Have text and reload button', async () => {
    render(<Error />);

    expect(screen.getByText('Error Page')).toBeInTheDocument();
    await userEvent.click(screen.getByRole('button', { name: 'Reload page' }));
    expect(
      screen.getByRole('button', { name: 'Reload page' })
    ).toBeInTheDocument();
  });
});
