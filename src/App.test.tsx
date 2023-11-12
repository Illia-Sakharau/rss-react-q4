import { describe, it } from 'vitest';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import * as TEST_DATA from './test/testData';
import App from './App';

const triger = vi.fn();
vi.mock('../../../API/GetCollection', async () => {
  return {
    default: {
      getArtworks: async (limit: number, page: number, IDs: number[]) => {
        const responseData = {
          data: TEST_DATA.responseArtworsInfo.filter(
            (art) => art.id === IDs[0]
          ),
        };
        triger();
        return responseData;
      },
      getSearchArtworks: async () => {
        const responseData = {
          data: TEST_DATA.responseArtworsInfo,
        };
        triger();
        return responseData;
      },
    },
  };
});

describe('Application', () => {
  it('Test invalid route', async () => {
    render(<App />);
    expect(screen.getByText('Home Page')).toBeInTheDocument();
    const badLink = screen.getByRole('link', { name: '404' });

    expect(badLink).toBeInTheDocument();
    await userEvent.click(badLink);

    expect(screen.getByText('Page Not Found')).toBeInTheDocument();
  });
});
