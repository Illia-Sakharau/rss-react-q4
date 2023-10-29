import ArtworksAPI from '../../../API/GetCollection';
import { Art } from '../../../types';
import adapter from '../../../utils/adapter';
import { SectionHeader } from '../../atoms/headers/Headers';
import Loader from '../../atoms/loader/Loader';
import SectionWrapper from '../../atoms/sectionWrapper/sectionWrapper';
import ArtCard from '../../molecules/artCard/ArtCard';
import classes from './style.module.scss';
import { Component } from 'react';

type Props = unknown;
type State = {
  arts: Art[] | undefined;
};

class ArtList extends Component<Props, State> {
  state: State = {
    arts: undefined,
  };

  componentDidMount(): void {
    ArtworksAPI.getArtworks(20, 1)
      .then((resp) => resp.data.map((artworkInfo) => adapter(artworkInfo)))
      .then((artworks) =>
        this.setState({
          arts: artworks,
        })
      );
  }

  render() {
    return (
      <section className={classes.artList}>
        <SectionWrapper className={classes.wrapper}>
          <SectionHeader>Collection</SectionHeader>
          <div className={classes.artListInner}>
            {!this.state.arts ? (
              <Loader />
            ) : (
              this.state.arts.map((art) => <ArtCard key={art.id} art={art} />)
            )}
          </div>
        </SectionWrapper>
      </section>
    );
  }
}

export default ArtList;
