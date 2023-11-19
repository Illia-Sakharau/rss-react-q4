import { describe, it } from 'vitest';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import NotFound from './NotFound';
import { MemoryRouter } from 'react-router-dom';

describe('Not found (404) page', () => {
  it('Have text and navigate button', async () => {
    render(
      <MemoryRouter>
        <NotFound />
      </MemoryRouter>
    );

    expect(screen.getByText('404')).toBeInTheDocument();
    expect(screen.getByText('Page Not Found')).toBeInTheDocument();
    await userEvent.click(screen.getByRole('button', { name: 'Go Home' }));
    expect(screen.getByRole('button', { name: 'Go Home' })).toBeInTheDocument();
  });
});
