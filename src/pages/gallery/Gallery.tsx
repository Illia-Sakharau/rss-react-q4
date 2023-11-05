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
import Pagination from '../../components/molecules/pagination/Pagination';
import SectionWrapper from '../../components/atoms/sectionWrapper/sectionWrapper';

type Props = unknown;

const Gallery: FC<Props> = (): ReactElement => {
  const [arts, setArts] = useState<Art[] | undefined>(undefined);
  const [error, setError] = useState<boolean>(false);
  const [selectedArtNumber, setSelectedArtNumber] = useState('10');
  const [currentPage, setCurrentPage] = useState('1');
  const [totalPages, setTotalPages] = useState(1);
  useEffect(() => {
    if (error) {
      throw new Error('ERRORRRRR...');
    }
  }, [error]);

  useEffect(() => {
    const text = localStorage.getItem('searchText') || '';
    setArts(undefined);
    ArtworksAPI.getSearchArtworks(text, +selectedArtNumber, +currentPage)
      .then((resp) => {
        setTotalPages(resp.pagination.total_pages);
        return resp.data.map((artworkInfo) => adapter(artworkInfo));
      })
      .then((artworks) => setArts(artworks));
  }, [selectedArtNumber, currentPage]);

  useEffect(() => {
    setCurrentPage('1');
  }, [selectedArtNumber]);

  const handlerSearchButtonClick = (text: string) => {
    localStorage.setItem('searchText', text);
    setArts(undefined);
    setCurrentPage('1');
    ArtworksAPI.getSearchArtworks(text, +selectedArtNumber, +currentPage)
      .then((resp) => {
        setTotalPages(resp.pagination.total_pages);
        return resp.data.map((artworkInfo) => adapter(artworkInfo));
      })
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
        <SectionWrapper className={classes.pagination}>
          <Pagination
            totalPages={totalPages}
            defaultText={'Page'}
            currentPage={+currentPage}
            onChange={setCurrentPage}
          />
        </SectionWrapper>
      </div>
    </GalleyContext.Provider>
  );
};

export default Gallery;
