import ArtList from '../../components/organisms/ArtList/ArtList';
import SearchBar from '../../components/organisms/SearchBar/SearchBar';
import classes from './style.module.scss';
import { FC, ReactElement, useEffect, useState } from 'react';
import { Art } from '../../types';
import ArtworksAPI from '../../API/GetCollection';
import adapter from '../../utils/adapter';
import Button from '../../components/atoms/button/Button';
import { Outlet } from 'react-router-dom';
import { GalleyContext } from './context';

type Props = unknown;

const Gallery: FC<Props> = (): ReactElement => {
  const [arts, setArts] = useState<Art[] | undefined>(undefined);
  const [error, setError] = useState<boolean>(false);
  const [selectedArtNumber, setSelectedArtNumber] = useState('10');

  useEffect(() => {
    if (error) {
      throw new Error('ERRORRRRR...');
    }
  }, [error]);

  useEffect(() => {
    const text = localStorage.getItem('searchText') || '';
    setArts(undefined);
    ArtworksAPI.getSearchArtworks(text, +selectedArtNumber)
      .then((resp) => resp.data.map((artworkInfo) => adapter(artworkInfo)))
      .then((artworks) => setArts(artworks));
  }, [selectedArtNumber]);

  const handlerSearchButtonClick = (text: string) => {
    localStorage.setItem('searchText', text);
    setArts(undefined);
    ArtworksAPI.getSearchArtworks(text, +selectedArtNumber)
      .then((resp) => resp.data.map((artworkInfo) => adapter(artworkInfo)))
      .then((artworks) => setArts(artworks));
  };

  return (
    <GalleyContext.Provider
      value={{
        selectedArtNumber,
        setSelectedArtNumber,
      }}
    >
      <div className={classes.page}>
        <Button onClick={() => setError(true)}>{`>>> ERROR BUTTON <<<`}</Button>
        <SearchBar action={handlerSearchButtonClick} />
        <Outlet />
        <ArtList arts={arts} />
      </div>
    </GalleyContext.Provider>
  );
};

export default Gallery;
