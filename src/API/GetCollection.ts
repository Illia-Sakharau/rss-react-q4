import { ResponseInfo } from '../types';

export default class ArtworksAPI {
  static url: string = 'https://api.artic.edu/api/v1/artworks';

  static async getArtworks(limit: number, page: number): Promise<ResponseInfo> {
    const response = await fetch(
      `${ArtworksAPI.url}?limit=${limit}&page=${page}`
    );
    const responseData = (await response.json()) as ResponseInfo;
    return responseData;
  }
}
