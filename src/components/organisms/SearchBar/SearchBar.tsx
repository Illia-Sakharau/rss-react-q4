import { GalleyContext, IGalleryContext } from '../../../pages/gallery/context';
import SectionWrapper from '../../atoms/sectionWrapper/sectionWrapper';
import MSearchBar from '../../molecules/SearchBar/SearchBar';
import classes from './style.module.scss';
import { FC, ReactElement, useContext } from 'react';

type Props = {
  action: (text: string) => void;
};

const SearchBar: FC<Props> = (props): ReactElement => {
  const { searchText, setSearchText } = useContext(
    GalleyContext
  ) as IGalleryContext;

  return (
    <div className={classes.searchBar}>
      <SectionWrapper className={classes.searchBarWrapper}>
        <MSearchBar
          action={props.action}
          searchText={searchText}
          setSearchText={setSearchText}
        />
      </SectionWrapper>
    </div>
  );
};

export default SearchBar;
