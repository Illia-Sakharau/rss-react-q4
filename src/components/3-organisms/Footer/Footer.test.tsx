import { describe, it } from 'vitest';
import { render, screen } from '@testing-library/react';
import Footer from './Footer';
import { RouterContext } from 'next/dist/shared/lib/router-context.shared-runtime';
import { createMockRouter } from '@/test/createMockRouter';

describe('Footer', () => {
  it('Check navigation and logo', async () => {
    render(
      <RouterContext.Provider value={createMockRouter()}>
        <Footer />
      </RouterContext.Provider>
    );

    const logoEl = screen.getByTestId('logo');
    const homeLinkEl = screen.getByRole('link', {
      name: 'Home',
    }) as HTMLLinkElement;
    const galleryLinkEl = screen.getByRole('link', {
      name: 'Gallery',
    }) as HTMLLinkElement;
    const rssLogo = screen.getByAltText('The Rolling Scopes School');
    const aicLogo = screen.getByAltText('The Art Institute of Chicago');

    expect(logoEl).toBeInTheDocument();
    expect(homeLinkEl).toBeInTheDocument();
    expect(galleryLinkEl).toBeInTheDocument();
    expect(rssLogo).toBeInTheDocument();
    expect(aicLogo).toBeInTheDocument();
  });
});
