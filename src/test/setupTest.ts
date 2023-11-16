import '@testing-library/jest-dom/vitest';
import '@testing-library/user-event';
import * as matchers from '@testing-library/jest-dom/matchers';
import { expect } from 'vitest';
import { setupServer } from 'msw/node';
import { http, HttpResponse } from 'msw';
import { responseArtworsInfo } from './testData';

expect.extend(matchers);

export const server = setupServer(
  http.get('https://api.artic.edu/api/v1/*', () => {
    return HttpResponse.json({
      pagination: {
        total: 11,
        limit: 10,
        total_pages: 2,
        current_page: 1,
      },
      data: responseArtworsInfo.toSpliced(9, 1),
    });
  })
);

beforeAll(() => {
  server.listen();
});

afterEach(() => {
  server.resetHandlers();
});

afterAll(() => {
  server.close();
});
