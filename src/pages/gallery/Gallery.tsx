import ArtList from '../../components/organisms/ArtList/ArtList';
import SearchBar from '../../components/organisms/SearchBar/SearchBar';
import classes from './style.module.scss';
import { FC, ReactElement, useEffect } from 'react';
import { Outlet, useSearchParams } from 'react-router-dom';
import Pagination from '../../components/molecules/pagination/Pagination';
import SectionWrapper from '../../components/atoms/sectionWrapper/sectionWrapper';
import { useAppDispatch, useAppSelector } from '../../hooks/redux';
import { gallerySlice } from '../../store/reducers/GallarySlice';

type Props = unknown;

const Gallery: FC<Props> = (): ReactElement => {
  const [pageParams, setPageParams] = useSearchParams();

  const { currentPage, artPerPage, totalPages } = useAppSelector(
    (state) => state.galleryReducer
  );
  const { setSearchText, setCurrentPage, setArtPerPage } = gallerySlice.actions;
  const dispatch = useAppDispatch();

  const requestActions = (text: string) => {
    const queryParam: {
      limit: string;
      page: string;
      search?: string;
    } = {
      limit: `${artPerPage}`,
      page: `${currentPage}`,
    };
    if (text) {
      queryParam.search = text;
    }
    dispatch(setSearchText(text));
    setPageParams(queryParam);
  };

  useEffect(() => {
    const searchTextByUrl = pageParams.get('search');
    const currentPageByUrl = pageParams.get('page');
    const artPerPageByUrl = pageParams.get('limit');

    if (!!searchTextByUrl) {
      dispatch(setSearchText(searchTextByUrl));
      localStorage.setItem('searchText', searchTextByUrl);
    }
    if (!!currentPageByUrl) {
      dispatch(setCurrentPage(+currentPageByUrl));
    }
    if (!!artPerPageByUrl) {
      dispatch(setArtPerPage(+artPerPageByUrl));
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    const text = pageParams.get('search')
      ? `${pageParams.get('search')}`
      : localStorage.getItem('searchText') || '';
    requestActions(text);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [currentPage, artPerPage]);

  const handlerSearchButtonClick = (text: string) => {
    localStorage.setItem('searchText', text);
    dispatch(setCurrentPage(1));
    dispatch(setSearchText(text));
    requestActions(text);
  };

  return (
    <div className={classes.page}>
      <SearchBar action={handlerSearchButtonClick} />
      <Outlet />
      <ArtList />
      <SectionWrapper className={classes.pagination}>
        <Pagination
          totalPages={totalPages}
          itemsOnPage={artPerPage}
          defaultText={'Page'}
          currentPage={+currentPage}
          onChange={(nextPage: string) => {
            dispatch(setCurrentPage(+nextPage));
          }}
        />
      </SectionWrapper>
    </div>
  );
};

export default Gallery;
