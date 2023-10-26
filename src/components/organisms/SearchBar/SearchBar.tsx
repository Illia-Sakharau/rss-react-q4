import classes from './style.module.scss';
import { Component } from 'react';

class SearchBar extends Component {
  render() {
    return (
      <div className={classes.searchBar}>
        <input type="text" />
        <button>Search</button>
      </div>
    );
  }
}

export default SearchBar;
