import ArtList from '../../components/organisms/ArtList/ArtList';
import SearchBar from '../../components/organisms/SearchBar/SearchBar';
import classes from './style.module.scss';
import { Component } from 'react';
import { Art } from '../../types';
import ArtworksAPI from '../../API/GetCollection';
import adapter from '../../utils/adapter';
import Button from '../../components/atoms/button/Button';

type Props = unknown;
type State = {
  arts: Art[] | undefined;
  error: boolean;
};

class Gallery extends Component<Props, State> {
  state: State = {
    arts: undefined,
    error: false,
  };

  handlerSearchButtonClick = (text: string) => {
    localStorage.setItem('searchText', text);
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
    const text = localStorage.getItem('searchText') || '';
    ArtworksAPI.getSearchArtworks(text)
      .then((resp) => resp.data.map((artworkInfo) => adapter(artworkInfo)))
      .then((artworks) =>
        this.setState({
          arts: artworks,
        })
      );
  }

  render() {
    if (this.state.error) {
      throw new Error('ERRORRRRR...');
    }
    return (
      <div className={classes.page}>
        <Button
          onClick={() => {
            this.setState({ error: true });
          }}
        >{`>>> ERROR BUTTON <<<`}</Button>
        <SearchBar action={this.handlerSearchButtonClick} />
        <ArtList arts={this.state.arts} />
      </div>
    );
  }
}

export default Gallery;
