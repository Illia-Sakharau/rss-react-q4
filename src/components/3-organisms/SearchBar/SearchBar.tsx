import { useAppDispatch, useAppSelector } from '../../../hooks/redux';
import { gallerySlice } from '../../../store/reducers/GallarySlice';
import SectionWrapper from '../../1-atoms/sectionWrapper/sectionWrapper';
import MSearchBar from '../../2-molecules/SearchBar/SearchBar';
import classes from './style.module.scss';
import { FC, ReactElement, useEffect, useState } from 'react';

type Props = {
  action: (text: string) => void;
};

const SearchBar: FC<Props> = (props): ReactElement => {
  const { setSearchText } = gallerySlice.actions;
  const dispatch = useAppDispatch();
  const { searchText } = useAppSelector((state) => state.galleryReducer);
  const [text, setText] = useState(searchText);

  useEffect(() => {
    setText(searchText);
  }, [searchText]);

  const buttenClickHandler = () => {
    dispatch(setSearchText(text));
    props.action(text);
  };

  return (
    <div className={classes.searchBar}>
      <SectionWrapper className={classes.searchBarWrapper}>
        <MSearchBar
          action={buttenClickHandler}
          searchText={text}
          setSearchText={setText}
        />
      </SectionWrapper>
    </div>
  );
};

export default SearchBar;
