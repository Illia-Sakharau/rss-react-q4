import ArtList from '../../components/organisms/ArtList/ArtList';
import SearchBar from '../../components/organisms/SearchBar/SearchBar';
import classes from './style.module.scss';
import { Component } from 'react';

class Gallery extends Component {
  render() {
    return (
      <div className={classes.page}>
        <SearchBar />
        <ArtList />
      </div>
    );
  }
}

export default Gallery;
