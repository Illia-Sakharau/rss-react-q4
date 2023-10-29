import SectionWrapper from '../../atoms/sectionWrapper/sectionWrapper';
import MSearchBar from '../../molecules/SearchBar/SearchBar';
import classes from './style.module.scss';
import { Component } from 'react';

class SearchBar extends Component {
  render() {
    return (
      <div className={classes.searchBar}>
        <SectionWrapper className={classes.searchBarWrapper}>
          <MSearchBar />
        </SectionWrapper>
      </div>
    );
  }
}

export default SearchBar;
