import ArtList from '../../components/organisms/ArtList/ArtList';
import SearchBar from '../../components/organisms/SearchBar/SearchBar';
import classes from './style.module.scss';
import { FC, ReactElement, useEffect, useState } from 'react';
import { Art } from '../../types';
import ArtworksAPI from '../../API/GetCollection';
import adapter from '../../utils/adapter';
import Button from '../../components/atoms/button/Button';

type Props = unknown;

const Gallery: FC<Props> = (): ReactElement => {
  const [arts, setArts] = useState<Art[] | undefined>(undefined);
  const [error, setError] = useState<boolean>(false);

  useEffect(() => {
    const text = localStorage.getItem('searchText') || '';
    ArtworksAPI.getSearchArtworks(text)
      .then((resp) => resp.data.map((artworkInfo) => adapter(artworkInfo)))
      .then((artworks) => setArts(artworks));
  }, []);

  useEffect(() => {
    if (error) {
      throw new Error('ERRORRRRR...');
    }
  }, [error]);

  const handlerSearchButtonClick = (text: string) => {
    localStorage.setItem('searchText', text);
    setArts(undefined);
    ArtworksAPI.getSearchArtworks(text)
      .then((resp) => resp.data.map((artworkInfo) => adapter(artworkInfo)))
      .then((artworks) => setArts(artworks));
  };

  return (
    <div className={classes.page}>
      <Button onClick={() => setError(true)}>{`>>> ERROR BUTTON <<<`}</Button>
      <SearchBar action={handlerSearchButtonClick} />
      <ArtList arts={arts} />
    </div>
  );
};

export default Gallery;
