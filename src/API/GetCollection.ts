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
    count: number,
    page: number
  ): Promise<ResponseInfo> {
    if (text !== '') {
      const q = encodeURIComponent(text);
      const size = count;
      const from = count * (page - 1);
      const response = await fetch(
        `${ArtworksAPI.url}/search?q=${q}&size=${size}&from=${from}`
      );
      const responseData = (await response.json()) as ResponseInfo;
      const artsIDs = responseData.data.map((artInfo) => artInfo.id);
      const artsInfo = await ArtworksAPI.getArtworks(
        artsIDs.length,
        1,
        artsIDs
      );
      return { ...artsInfo, pagination: responseData.pagination };
    }
    return await ArtworksAPI.getArtworks(count, page);
  }
}
