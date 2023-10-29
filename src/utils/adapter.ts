import { Art, ResponseArtworkInfo } from '../types';

export default function (resp: ResponseArtworkInfo): Art {
  const id = resp.id;
  const title = resp.title;
  const artist = resp.artist_display;
  const date = resp.date_display;
  const imgURL = `https://www.artic.edu/iiif/2/${resp.image_id}/full/400,/0/default.jpg`;
  const imgAlt = resp.thumbnail.alt_text;

  return {
    id,
    title,
    artist,
    date,
    imgURL,
    imgAlt,
  };
}
