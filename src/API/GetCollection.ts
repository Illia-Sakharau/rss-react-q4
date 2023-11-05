import { ResponseInfo } from '../types';

export default class ArtworksAPI {
  static url: string = 'https://api.artic.edu/api/v1/artworks';

  static async getArtworks(
    limit: number,
    page: number,
    IDs?: number[]
  ): Promise<ResponseInfo> {
    const IDsReqest = IDs ? `&ids=${IDs.toString()}` : '';
    const response = await fetch(
      `${ArtworksAPI.url}?limit=${limit}&page=${page}${IDsReqest}`
    );
    const responseData = (await response.json()) as ResponseInfo;
    return responseData;
  }

  static async getSearchArtworks(
    text: string,
    count: number
  ): Promise<ResponseInfo> {
    if (text !== '') {
      const response = await fetch(
        `${ArtworksAPI.url}/search?q=${encodeURIComponent(text)}&size=${count}`
      );
      const responseData = (await response.json()) as ResponseInfo;
      const artsIDs = responseData.data.map((artInfo) => artInfo.id);
      return await ArtworksAPI.getArtworks(artsIDs.length, 1, artsIDs);
    }
    return await ArtworksAPI.getArtworks(count, 1);
  }
}
