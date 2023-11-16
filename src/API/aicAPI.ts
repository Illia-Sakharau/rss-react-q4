import { Art, ResponseInfo } from '../types';
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
    fetchArtworks: build.query<
      ResponseInfo,
      { limit: number; page: number; IDs?: number[] }
    >({
      query: ({ limit, page, IDs }) => ({
        url: '/',
        params: {
          limit,
          page,
          ids: IDs?.toString(),
        },
      }),
    }),

    fetchArtwork: build.query<ResponseInfo, number>({
      query: (id) => ({
        url: `/${id}`,
      }),
    }),

    fetchArtworksBySearch: build.query<
      Art[],
      { text: string; limit: number; page: number }
    >({
      queryFn: async (arg, api) => {
        const { setIsLoading, setTotalPages } = gallerySlice.actions;
        api.dispatch(setIsLoading(true));
        const response = await ArtworksAPI.getSearchArtworks(
          arg.text,
          arg.limit,
          arg.page
        );

        const data = response.data.map((respInfo) => adapter(respInfo));
        api.dispatch(setTotalPages(response.pagination.total_pages));
        api.dispatch(setIsLoading(false));
        return { data };
      },
    }),
  }),
});
