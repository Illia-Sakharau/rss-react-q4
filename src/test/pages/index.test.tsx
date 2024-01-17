import { describe, it } from 'vitest';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import Home from '@/pages';
import { RouterContext } from 'next/dist/shared/lib/router-context.shared-runtime';
import { createMockRouter } from '../createMockRouter';

describe('Home page', () => {
  const mocckedPush = vi.fn();

  it('Test invalid route', async () => {
    render(
      <RouterContext.Provider value={createMockRouter({ push: mocckedPush })}>
        <Home />
      </RouterContext.Provider>
    );
    const badLink = screen.getByRole('link', { name: '404' });

    expect(screen.getByText('Home Page')).toBeInTheDocument();
    expect(badLink).toBeInTheDocument();
    await userEvent.click(badLink);
    expect(mocckedPush).toHaveBeenCalled();
  });

  it('Test error', async () => {
    render(
      <RouterContext.Provider value={createMockRouter()}>
        <Home />
      </RouterContext.Provider>
    );

    const errorButton = screen.getByRole('button', {
      name: '>>> ERROR BUTTON <<<',
    });

    expect(errorButton).toBeInTheDocument();
    await userEvent.click(errorButton);
  });
});
