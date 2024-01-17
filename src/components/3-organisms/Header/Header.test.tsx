import { describe, it } from 'vitest';
import { render, screen } from '@testing-library/react';
import Header from './Header';
import { createMockRouter } from '@/test/createMockRouter';
import { RouterContext } from 'next/dist/shared/lib/router-context.shared-runtime';

describe('Header', () => {
  it('Links and logo', async () => {
    render(
      <RouterContext.Provider value={createMockRouter({ pathname: '/' })}>
        <Header />
      </RouterContext.Provider>
    );

    const logoEl = screen.getByTestId('logo');

    const homeLinkEl = screen.getByRole('link', {
      name: 'Home',
    }) as HTMLLinkElement;

    const galleryLinkEl = screen.getByRole('link', {
      name: 'Gallery',
    }) as HTMLLinkElement;

    expect(logoEl).toBeInTheDocument();
    expect(homeLinkEl).toBeInTheDocument();
    expect(galleryLinkEl).toBeInTheDocument();
  });
});
