import { describe, it } from 'vitest';
import { fireEvent, render, screen } from '@testing-library/react';
import {
  MemoryRouter,
  Outlet,
  RouterProvider,
  createMemoryRouter,
} from 'react-router-dom';
import * as TEST_DATA from '../../../test/testData';
import NavBar from './NavBar';

describe('Navigation bar', () => {
  const linksInBarTest = [
    {
      to: '/',
      text: 'home',
    },
    {
      to: '/gallery',
      text: 'gallery',
    },
    {
      to: '/about',
      text: 'about',
    },
  ];
  const classNameTest = TEST_DATA.className;

  it('Have passed className and links', () => {
    render(
      <MemoryRouter>
        <NavBar linksInBar={linksInBarTest} className={classNameTest} />
      </MemoryRouter>
    );

    expect(screen.getByRole('navigation')).toHaveClass(classNameTest);

    expect(screen.getAllByRole('link').length).toBe(linksInBarTest.length);
    linksInBarTest.forEach((link) => {
      expect(screen.getByRole('link', { name: link.text })).toBeInTheDocument();
    });
  });

  it('Check navigation', () => {
    const routes = [
      {
        path: '/',
        element: (
          <div>
            <NavBar linksInBar={linksInBarTest} />
            <Outlet />
          </div>
        ),
        children: linksInBarTest.map((link) => ({
          path: link.to,
          element: <div data-testid={link.text}></div>,
        })),
      },
    ];

    const router = createMemoryRouter(routes, {
      initialEntries: ['/'],
    });

    render(<RouterProvider router={router} />);

    expect(router.state.location.pathname).toBe('/');

    linksInBarTest.reverse().forEach((link) => {
      fireEvent.click(screen.getByRole('link', { name: link.text }));
      expect(router.state.location.pathname).toBe(link.to);
    });
  });
});
