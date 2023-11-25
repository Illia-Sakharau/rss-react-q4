import { FC, ReactElement } from 'react';
import classes from './style.module.scss';
import SearchBar from '@/components/3-organisms/SearchBar/SearchBar';
import ArtList from '@/components/3-organisms/ArtList/ArtList';
import SectionWrapper from '@/components/1-atoms/sectionWrapper/sectionWrapper';
import Pagination from '@/components/2-molecules/pagination/Pagination';
import { Art } from '@/types';
import { useRouter } from 'next/router';

type Props = {
  currentPage: number;
  totalPages: number;
  artworks: Art[] | undefined;
  artPerPage: number;
  searchText: string;
  asideWidget?: ReactElement;
};

const GalleryLayout: FC<Props> = ({
  asideWidget,
  currentPage,
  totalPages,
  artworks,
  artPerPage,
  searchText,
}): ReactElement => {
  const router = useRouter();

  const handlerChangeCurrentPage = (nextPage: string) => {
    router.query.page = nextPage;
    router.push({
      pathname: router.pathname,
      query: router.query,
    });
  };

  return (
    <div className={classes.page}>
      <SearchBar searchText={searchText} />
      {asideWidget}
      <ArtList artworks={artworks} artPerPage={artPerPage} />
      <SectionWrapper className={classes.pagination}>
        <Pagination
          totalPages={totalPages}
          defaultText={'Page'}
          currentPage={+currentPage}
          onChange={handlerChangeCurrentPage}
        />
      </SectionWrapper>
    </div>
  );
};

export default GalleryLayout;
