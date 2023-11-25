import { describe, it } from 'vitest';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import NotFound from '@/pages/404';
import { RouterContext } from 'next/dist/shared/lib/router-context.shared-runtime';
import { createMockRouter } from '../createMockRouter';

describe('Not found (404) page', () => {
  it('Have text and navigate button', async () => {
    render(
      <RouterContext.Provider value={createMockRouter()}>
        <NotFound />
      </RouterContext.Provider>
    );

    expect(screen.getByText('404')).toBeInTheDocument();
    expect(screen.getByText('Page Not Found')).toBeInTheDocument();
    await userEvent.click(screen.getByRole('button', { name: 'Go Home' }));
    expect(screen.getByRole('button', { name: 'Go Home' })).toBeInTheDocument();
  });
});
