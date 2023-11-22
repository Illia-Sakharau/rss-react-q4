import { describe, it } from 'vitest';
import { fireEvent, render, screen } from '@testing-library/react';
import * as TEST_DATA from '../../../test/testData';
import ArtCard from './ArtCard';
import {
  MemoryRouter,
  RouterProvider,
  createMemoryRouter,
} from 'react-router-dom';

describe('Artwork card', () => {
  const arts = TEST_DATA.preparedArtworksInfo;

  it('Check information on card', async () => {
    render(
      <MemoryRouter>
        <ArtCard art={arts[0]} />
      </MemoryRouter>
    );

    expect(screen.getByRole('link')).toBeInTheDocument();
    expect(screen.getByAltText(arts[0].imgAlt)).toBeInTheDocument();
    expect(screen.getByText(arts[0].title)).toBeInTheDocument();
    expect(screen.getByText(arts[0].artist)).toBeInTheDocument();
    expect(screen.getByText(arts[0].date)).toBeInTheDocument();
  });

  it('Check link navigation', async () => {
    const routes = [
      {
        path: '/gallery',
        element: <ArtCard art={arts[0]} />,
        children: [
          {
            path: '/gallery/:artID',
            element: <div></div>,
          },
        ],
      },
    ];
    const router = createMemoryRouter(routes, {
      initialEntries: ['/gallery'],
    });

    render(<RouterProvider router={router} />);

    expect(router.state.location.pathname).toBe(`/gallery`);
    fireEvent.click(screen.getByRole('link'));
    expect(router.state.location.pathname).toBe(`/gallery/${arts[0].id}`);
  });
});
