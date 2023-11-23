import { Art, ResponseArtworkInfo, ResponseInfo } from '../types';
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/dist/query/react';
import ArtworksAPI from './GetCollection';
import adapter from '../utils/adapter';
import { HYDRATE } from 'next-redux-wrapper';

export const artworksAPI = createApi({
  reducerPath: 'artworksAPI',
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://api.artic.edu/api/v1/artworks',
  }),
  extractRehydrationInfo(action, { reducerPath }) {
    if (action.type === HYDRATE) {
      return action.payload[reducerPath];
    }
  },

  endpoints: (build) => ({
    fetchArtwork: build.query<Art, string>({
      query: (id) => ({
        url: `/${id}`,
      }),
      transformResponse: (response: { data: ResponseArtworkInfo }) =>
        adapter(response.data),
    }),

    fetchArtworksBySearch: build.query<
      ResponseInfo,
      { text: string; limit: number; page: number }
    >({
      queryFn: async ({ text, limit, page }) => {
        const response = await ArtworksAPI.getSearchArtworks(text, limit, page);
        return { data: response };
      },
    }),
  }),
});
