import { ReactElement } from 'react';
import { Art, ResponseArtworkInfo } from '../types';
import noImg from '../assets/no-img.svg';

type Element = {
  id: string;
  text: string;
  reactEl: () => ReactElement;
};

// text data
export const text = 'Test text';
export const className = 'test-class';
export const title = 'Test title';
export const value = 'Test value';
export const placeholder = 'Test placeholder';

// object data
export const element: Element = {
  id: 'test-id',
  text: 'Test text',
  reactEl: () => <div data-testid="test-id">Test text</div>,
};

export const responseArtworsInfo: ResponseArtworkInfo[] = [
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
  {
    id: 3,
    title: 'title 3',
    thumbnail: {
      alt_text: 'test alt text 3',
    },
    date_display: '2003',
    artist_display: 'Artist 3',
    image_id: 'img-3-id',

    category_titles: 'category 3',
    provenance_text: 'provance 3',
  },
  {
    id: 4,
    title: 'title 4',
    thumbnail: {
      alt_text: 'test alt text 4',
    },
    date_display: '2004',
    artist_display: 'Artist 4',
    image_id: 'img-4-id',

    category_titles: 'category 4',
    provenance_text: 'provance 4',
  },
  {
    id: 5,
    title: 'title 5',
    thumbnail: {
      alt_text: 'test alt text 5',
    },
    date_display: '2005',
    artist_display: 'Artist 5',
    image_id: 'img-5-id',

    category_titles: 'category 5',
    provenance_text: 'provance 5',
  },
  {
    id: 6,
    title: 'title 6',
    thumbnail: {
      alt_text: 'test alt text 6',
    },
    date_display: '2006',
    artist_display: 'Artist 6',
    image_id: 'img-6-id',

    category_titles: 'category 6',
    provenance_text: 'provance 6',
  },
  {
    id: 7,
    title: 'title 7',
    thumbnail: {
      alt_text: 'test alt text 7',
    },
    date_display: '2007',
    artist_display: 'Artist 7',
    image_id: 'img-7-id',

    category_titles: 'category 7',
    provenance_text: 'provance 7',
  },
  {
    id: 8,
    title: 'title 8',
    thumbnail: {
      alt_text: 'test alt text 8',
    },
    date_display: '2008',
    artist_display: 'Artist 8',
    image_id: 'img-8-id',

    category_titles: 'category 8',
    provenance_text: 'provance 8',
  },
  {
    id: 9,
    title: 'title 9',
    thumbnail: {
      alt_text: 'test alt text 9',
    },
    date_display: '2009',
    artist_display: 'Artist 9',
    image_id: 'img-9-id',

    category_titles: 'category 9',
    provenance_text: 'provance 9',
  },
  {
    id: 10,
    title: 'title 10',
    thumbnail: {
      alt_text: 'test alt text 10',
    },
    date_display: '20010',
    artist_display: 'Artist 10',
    image_id: 'img-10-id',

    category_titles: 'category 10',
    provenance_text: 'provance 10',
  },
  {
    id: 11,
    title: 'title 11',
    thumbnail: {
      alt_text: 'test alt text 11',
    },
    date_display: '20011',
    artist_display: 'Artist 11',
    image_id: 'img-11-id',

    category_titles: 'category 11',
    provenance_text: 'provance 11',
  },
];

export const preparedArtworksInfo: Art[] = [
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
    imgURL: noImg.src,
    imgAlt: 'without pictures',
    category: 'category 2',
    provenance: 'No data',
  },
  {
    id: 3,
    title: 'title 3',
    artist: 'Artist 3',
    date: '2003',
    imgURL: 'https://www.artic.edu/iiif/2/img-3-id/full/400,/0/default.jpg',
    imgAlt: 'test alt text 3',
    category: 'category 3',
    provenance: 'provance 3',
  },
  {
    id: 4,
    title: 'title 4',
    artist: 'Artist 4',
    date: '2004',
    imgURL: 'https://www.artic.edu/iiif/2/img-4-id/full/400,/0/default.jpg',
    imgAlt: 'test alt text 4',
    category: 'category 4',
    provenance: 'provance 4',
  },
  {
    id: 5,
    title: 'title 5',
    artist: 'Artist 5',
    date: '2005',
    imgURL: 'https://www.artic.edu/iiif/2/img-5-id/full/400,/0/default.jpg',
    imgAlt: 'test alt text 5',
    category: 'category 5',
    provenance: 'provance 5',
  },
  {
    id: 6,
    title: 'title 6',
    artist: 'Artist 6',
    date: '2006',
    imgURL: 'https://www.artic.edu/iiif/2/img-6-id/full/400,/0/default.jpg',
    imgAlt: 'test alt text 6',
    category: 'category 6',
    provenance: 'provance 6',
  },
  {
    id: 7,
    title: 'title 7',
    artist: 'Artist 7',
    date: '2007',
    imgURL: 'https://www.artic.edu/iiif/2/img-7-id/full/400,/0/default.jpg',
    imgAlt: 'test alt text 7',
    category: 'category 7',
    provenance: 'provance 7',
  },
  {
    id: 8,
    title: 'title 8',
    artist: 'Artist 8',
    date: '2008',
    imgURL: 'https://www.artic.edu/iiif/2/img-8-id/full/400,/0/default.jpg',
    imgAlt: 'test alt text 8',
    category: 'category 8',
    provenance: 'provance 8',
  },
  {
    id: 9,
    title: 'title 9',
    artist: 'Artist 9',
    date: '2009',
    imgURL: 'https://www.artic.edu/iiif/2/img-9-id/full/400,/0/default.jpg',
    imgAlt: 'test alt text 9',
    category: 'category 9',
    provenance: 'provance 9',
  },
  {
    id: 10,
    title: 'title 10',
    artist: 'Artist 10',
    date: '20010',
    imgURL: 'https://www.artic.edu/iiif/2/img-10-id/full/400,/0/default.jpg',
    imgAlt: 'test alt text 10',
    category: 'category 10',
    provenance: 'provance 10',
  },
  {
    id: 11,
    title: 'title 11',
    artist: 'Artist 11',
    date: '20011',
    imgURL: 'https://www.artic.edu/iiif/2/img-11-id/full/400,/0/default.jpg',
    imgAlt: 'test alt text 11',
    category: 'category 11',
    provenance: 'provance 11',
  },
];
