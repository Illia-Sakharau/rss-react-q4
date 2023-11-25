import { useRouter } from 'next/router';
import SectionWrapper from '../../1-atoms/sectionWrapper/sectionWrapper';
import MSearchBar from '../../2-molecules/SearchBar/SearchBar';
import classes from './style.module.scss';
import { FC, ReactElement, useState } from 'react';

type Props = {
  searchText: string;
};

const SearchBar: FC<Props> = ({ searchText }): ReactElement => {
  const [text, setText] = useState(searchText);
  const router = useRouter();

  const handlerSearchButtonClick = (text: string) => {
    if (text !== searchText) {
      router.query.search = text;
      router.query.page = '1';
      router.push({
        pathname: router.pathname,
        query: router.query,
      });
    }
  };

  return (
    <div className={classes.searchBar}>
      <SectionWrapper className={classes.searchBarWrapper}>
        <MSearchBar
          action={handlerSearchButtonClick}
          searchText={text}
          setSearchText={setText}
        />
      </SectionWrapper>
    </div>
  );
};

export default SearchBar;
