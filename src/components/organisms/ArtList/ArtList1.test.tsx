import { describe, it } from 'vitest';
import { render, screen } from '@testing-library/react';
import ArtList from './ArtList';
import { MemoryRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { setupStore } from '../../../store/store';
import { server } from '../../../test/setupTest';
import { http, HttpResponse } from 'msw';

const store = setupStore();

describe('Art list 2', () => {
  it('Check empty state', async () => {
    server.use(
      http.get('https://api.artic.edu/api/v1/*', () => {
        return HttpResponse.json({
          pagination: {
            total: 11,
            limit: 10,
            total_pages: 2,
            current_page: 1,
          },
          data: [],
        });
      })
    );
    render(
      <Provider store={store}>
        <MemoryRouter>
          <ArtList />
        </MemoryRouter>
      </Provider>
    );

    const noItemTextEl = await screen.findByText('No matches found');
    expect(noItemTextEl).toBeInTheDocument();
  });
});
