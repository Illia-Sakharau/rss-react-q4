import ArtList from '../../components/organisms/ArtList/ArtList';
import SearchBar from '../../components/organisms/SearchBar/SearchBar';
import classes from './style.module.scss';
import { Component } from 'react';
import { Art } from '../../types';
import ArtworksAPI from '../../API/GetCollection';
import adapter from '../../utils/adapter';

type Props = unknown;
type State = {
  arts: Art[] | undefined;
};

class Gallery extends Component<Props, State> {
  state: State = {
    arts: undefined,
  };

  handlerSearchButtonClick = (text: string) => {
    this.setState({
      arts: undefined,
    });
    ArtworksAPI.getSearchArtworks(text)
      .then((resp) => resp.data.map((artworkInfo) => adapter(artworkInfo)))
      .then((artworks) =>
        this.setState({
          arts: artworks,
        })
      );
  };

  componentDidMount(): void {
    ArtworksAPI.getArtworks(10, 1)
      .then((resp) => resp.data.map((artworkInfo) => adapter(artworkInfo)))
      .then((artworks) =>
        this.setState({
          arts: artworks,
        })
      );
  }

  render() {
    return (
      <div className={classes.page}>
        <SearchBar action={this.handlerSearchButtonClick} />
        <ArtList arts={this.state.arts} />
      </div>
    );
  }
}

export default Gallery;
