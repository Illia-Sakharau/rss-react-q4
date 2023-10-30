import { Art, ResponseArtworkInfo } from '../types';
import noImg from '../assets/no-img.svg';

export default function (resp: ResponseArtworkInfo): Art {
  const id = Number(resp.id);
  const title = `${resp.title}`;
  const artist = `${resp.artist_display}`;
  const date = `${resp.date_display}`;
  const imgURL = resp.image_id
    ? `https://www.artic.edu/iiif/2/${resp.image_id}/full/600,/0/default.jpg`
    : noImg;
  const imgAlt = resp.thumbnail?.alt_text || 'without pictures';

  return {
    id,
    title,
    artist,
    date,
    imgURL,
    imgAlt,
  };
}
