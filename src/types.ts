export type Art = {
  id: number;
  title: string;
  artist: string;
  date: string;
  imgURL: string;
  imgAlt: string;

  category: string;
  provenance: string;
};

export type ResponseArtworkInfo = {
  id: number;
  title: string;
  thumbnail?: {
    lqip?: string;
    width?: number;
    height?: number;
    alt_text?: string;
  };
  date_display: string;
  artist_display: string;
  image_id?: string;

  category_titles: string;
  provenance_text?: string;
};

export type ResponseInfo = {
  pagination: {
    total: number;
    limit: number;
    offset: number;
    total_pages: number;
    current_page: number;
    next_url: string;
  };
  data: ResponseArtworkInfo[];
};

export type linkInfo = {
  to: string;
  text: string;
};
