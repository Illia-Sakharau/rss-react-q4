import { describe, it } from 'vitest';
import noImg from '../assets/no-img.svg';
import adapter from './adapter';
import { Art, ResponseArtworkInfo } from '../types';

describe('Art info adater', () => {
  const inputResponseArtworsInfo: ResponseArtworkInfo[] = [
    {
      id: 1,
      title: 'title 1',
      thumbnail: {
        alt_text: 'test alt text 1',
      },
      date_display: '2001',
      artist_display: 'Artist 1',
      image_id: 'img-1-id',

      category_titles: 'category 1',
      provenance_text: 'provance 1',
    },
    {
      id: 2,
      title: 'title 2',
      date_display: '2002',
      artist_display: 'Artist 2',
      category_titles: 'category 2',
    },
  ];

  const outputArtsInfo: Art[] = [
    {
      id: 1,
      title: 'title 1',
      artist: 'Artist 1',
      date: '2001',
      imgURL: 'https://www.artic.edu/iiif/2/img-1-id/full/400,/0/default.jpg',
      imgAlt: 'test alt text 1',
      category: 'category 1',
      provenance: 'provance 1',
    },
    {
      id: 2,
      title: 'title 2',
      artist: 'Artist 2',
      date: '2002',
      imgURL: noImg,
      imgAlt: 'without pictures',
      category: 'category 2',
      provenance: 'No data',
    },
  ];

  it('All data', () => {
    expect(adapter(inputResponseArtworsInfo[0])).toEqual(outputArtsInfo[0]);
  });

  it('With missed data', () => {
    expect(adapter(inputResponseArtworsInfo[1])).toEqual(outputArtsInfo[1]);
  });
});
