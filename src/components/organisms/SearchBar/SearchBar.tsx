import SectionWrapper from '../../atoms/sectionWrapper/sectionWrapper';
import MSearchBar from '../../molecules/SearchBar/SearchBar';
import classes from './style.module.scss';
import { FC, ReactElement } from 'react';

type Props = {
  action: (text: string) => void;
};

const SearchBar: FC<Props> = (props): ReactElement => {
  return (
    <div className={classes.searchBar}>
      <SectionWrapper className={classes.searchBarWrapper}>
        <MSearchBar action={props.action} />
      </SectionWrapper>
    </div>
  );
};

export default SearchBar;
