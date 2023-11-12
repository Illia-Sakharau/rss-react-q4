import ArtList from '../../components/organisms/ArtList/ArtList';
import SearchBar from '../../components/organisms/SearchBar/SearchBar';
import classes from './style.module.scss';
import { FC, ReactElement, useEffect, useState } from 'react';
import { Art } from '../../types';
import ArtworksAPI from '../../API/GetCollection';
import adapter from '../../utils/adapter';
import Button from '../../components/atoms/button/Button';
import { Outlet, useSearchParams } from 'react-router-dom';
import { GalleyContext } from './context';
import Pagination from '../../components/molecules/pagination/Pagination';
import SectionWrapper from '../../components/atoms/sectionWrapper/sectionWrapper';

type Props = unknown;

const Gallery: FC<Props> = (): ReactElement => {
  const [pageParams, setPageParams] = useSearchParams();
  const [arts, setArts] = useState<Art[] | undefined>(undefined);
  const [error, setError] = useState<boolean>(false);
  const [selectedArtNumber, setSelectedArtNumber] = useState(
    pageParams.get('limit') ? `${pageParams.get('limit')}` : '10'
  );
  const [currentPage, setCurrentPage] = useState(
    pageParams.get('page') ? `${pageParams.get('page')}` : '1'
  );
  const [searchText, setSearchText] = useState<string>(
    pageParams.get('search')
      ? `${pageParams.get('search')}`
      : localStorage.getItem('searchText') || ''
  );
  const [totalPages, setTotalPages] = useState(1);

  const requestActions = (text: string) => {
    const queryParam: {
      limit: string;
      page: string;
      search?: string;
    } = {
      limit: selectedArtNumber,
      page: currentPage,
    };
    if (text) {
      queryParam.search = text;
    }
    setSearchText(text);
    setArts(undefined);
    setPageParams(queryParam);
    ArtworksAPI.getSearchArtworks(text, +selectedArtNumber, +currentPage)
      .then((resp) => {
        setTotalPages(resp.pagination.total_pages);
        return resp.data.map((artworkInfo) => adapter(artworkInfo));
      })
      .then((artworks) => setArts(artworks));
  };

  useEffect(() => {
    if (error) {
      throw new Error('ERRORRRRR...');
    }
  }, [error]);

  useEffect(() => {
    const text = pageParams.get('search')
      ? `${pageParams.get('search')}`
      : localStorage.getItem('searchText') || '';
    requestActions(text);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [currentPage, selectedArtNumber]);

  const handlerSearchButtonClick = (text: string) => {
    localStorage.setItem('searchText', text);
    setCurrentPage('1');
    requestActions(text);
  };

  return (
    <GalleyContext.Provider
      value={{
        selectedArtNumber,
        setSelectedArtNumber,
        setCurrentPage,
        searchText,
        setSearchText,
        arts,
      }}
    >
      <div className={classes.page}>
        <Button onClick={() => setError(true)}>{`>>> ERROR BUTTON <<<`}</Button>
        <SearchBar action={handlerSearchButtonClick} />
        <Outlet />
        <ArtList />
        <SectionWrapper className={classes.pagination}>
          <Pagination
            totalPages={totalPages}
            itemsOnPage={selectedArtNumber}
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
