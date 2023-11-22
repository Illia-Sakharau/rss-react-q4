import { describe, it } from 'vitest';
import { fireEvent, render, screen } from '@testing-library/react';
import * as TEST_DATA from '../../../test/testData';
import AsideWidget from './asideWidget';
import {
  MemoryRouter,
  RouterProvider,
  createMemoryRouter,
} from 'react-router-dom';

describe('Aside widget wrapper', () => {
  const childrenTest = <TEST_DATA.element.reactEl />;
  const linkFrom = {
    pathname: '/from',
    search: '?course=react',
  };

  it('Check close button', () => {
    const routes = [
      {
        path: '/',
        element: <AsideWidget linkFrom={linkFrom}>{childrenTest}</AsideWidget>,
      },
      {
        path: linkFrom.pathname,
        element: <div data-testid={'common'}></div>,
      },
    ];
    const router = createMemoryRouter(routes, {
      initialEntries: ['/'],
    });

    render(<RouterProvider router={router} />);
    const closeButtonEl = screen.getByRole('link', { name: 'Close' });

    expect(screen.getByTestId('aside-widget')).toBeInTheDocument();
    expect(closeButtonEl).toBeInTheDocument();

    fireEvent.click(closeButtonEl);

    expect(router.state.location.pathname).toBe(linkFrom.pathname);
    expect(router.state.location.search).toBe(linkFrom.search);
  });

  it('Check dimmer color', () => {
    render(
      <MemoryRouter>
        <AsideWidget linkFrom={linkFrom}>{childrenTest}</AsideWidget>
      </MemoryRouter>
    );

    const dimmerEl = screen.getByRole('link', { name: '' });
    const style = window.getComputedStyle(dimmerEl);

    expect(style.background).toBe('rgba(0, 0, 0, 0.8)');
  });
});
