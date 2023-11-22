import { describe, it } from 'vitest';
import { render, screen } from '@testing-library/react';
import { Outlet, RouterProvider, createMemoryRouter } from 'react-router-dom';
import userEvent from '@testing-library/user-event';
import Footer from './Footer';

describe('Footer', () => {
  const routes = [
    {
      path: '/',
      element: (
        <div>
          <Footer />
          <Outlet />
        </div>
      ),
      children: [
        {
          path: '/',
          element: <div data-testid={'home'}></div>,
        },
        {
          path: '/gallery',
          element: <div data-testid={'gallery'}></div>,
        },
      ],
    },
  ];

  it('Check navigation and logo', async () => {
    const router = createMemoryRouter(routes, {
      initialEntries: ['/'],
    });

    render(<RouterProvider router={router} />);

    expect(router.state.location.pathname).toBe('/');

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

    await userEvent.click(galleryLinkEl);
    expect(router.state.location.pathname).toBe('/gallery');

    await userEvent.click(homeLinkEl);
    expect(router.state.location.pathname).toBe('/');
  });
});
