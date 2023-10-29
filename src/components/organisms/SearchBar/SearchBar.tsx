import SectionWrapper from '../../atoms/sectionWrapper/sectionWrapper';
import classes from './style.module.scss';
import { Component } from 'react';

class SearchBar extends Component {
  render() {
    return (
      <div className={classes.searchBar}>
        <SectionWrapper className={classes.searchBarWrapper}>
          <input type="text" />
          <button>Search</button>
        </SectionWrapper>
      </div>
    );
  }
}

export default SearchBar;
