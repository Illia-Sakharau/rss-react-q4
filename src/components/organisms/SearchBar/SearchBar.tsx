import { useAppDispatch, useAppSelector } from '../../../hooks/redux';
import { gallerySlice } from '../../../store/reducers/GallarySlice';
import SectionWrapper from '../../atoms/sectionWrapper/sectionWrapper';
import MSearchBar from '../../molecules/SearchBar/SearchBar';
import classes from './style.module.scss';
import { FC, ReactElement } from 'react';

type Props = {
  action: (text: string) => void;
};

const SearchBar: FC<Props> = (props): ReactElement => {
  const { searchText } = useAppSelector((state) => state.galleryReducer);
  const { setSearchText } = gallerySlice.actions;
  const dispatch = useAppDispatch();

  const searchButtonHendler = (text: string) => {
    dispatch(setSearchText(text));
  };

  return (
    <div className={classes.searchBar}>
      <SectionWrapper className={classes.searchBarWrapper}>
        <MSearchBar
          action={props.action}
          searchText={searchText}
          setSearchText={searchButtonHendler}
        />
      </SectionWrapper>
    </div>
  );
};

export default SearchBar;
