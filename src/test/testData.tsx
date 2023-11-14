import { ReactElement } from 'react';
import { Art, ResponseArtworkInfo } from '../types';
import noImg from '../assets/no-img.svg';
import { IGalleryContext } from '../pages/gallery/context';

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
    imgURL: noImg,
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
];

export const galleyContextTestData: IGalleryContext = {
  arts: preparedArtworksInfo,
  selectedArtNumber: '10',
  setSelectedArtNumber: vi.fn() as React.Dispatch<React.SetStateAction<string>>,
  setCurrentPage: vi.fn() as React.Dispatch<React.SetStateAction<string>>,
};
