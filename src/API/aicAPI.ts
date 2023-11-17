import { Art, ResponseArtworkInfo } from '../types';
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/dist/query/react';
import ArtworksAPI from './GetCollection';
import { gallerySlice } from '../store/reducers/GallarySlice';
import adapter from '../utils/adapter';

export const artworksAPI = createApi({
  reducerPath: 'artworksAPI',
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://api.artic.edu/api/v1/artworks',
  }),
  endpoints: (build) => ({
    fetchArtwork: build.query<Art, string>({
      query: (id) => ({
        url: `/${id}`,
      }),
      transformResponse: (response: { data: ResponseArtworkInfo }) =>
        adapter(response.data),
    }),

    fetchArtworksBySearch: build.query<
      Art[],
      { text: string; limit: number; page: number }
    >({
      queryFn: async (arg, api) => {
        const { setIsLoading, setTotalPages, setArts } = gallerySlice.actions;
        api.dispatch(setIsLoading(true));
        const response = await ArtworksAPI.getSearchArtworks(
          arg.text,
          arg.limit,
          arg.page
        );

        const data = response.data.map((respInfo) => adapter(respInfo));
        api.dispatch(setArts(data));
        api.dispatch(setTotalPages(response.pagination.total_pages));
        api.dispatch(setIsLoading(false));
        return { data };
      },
    }),
  }),
});
