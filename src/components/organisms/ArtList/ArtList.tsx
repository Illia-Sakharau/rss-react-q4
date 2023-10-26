import { Art } from '../../../types';
import Loader from '../../atoms/loader/Loader';
import ArtCard from '../../molecules/artCard/ArtCard';
import classes from './style.module.scss';
import { Component } from 'react';

const mockData: Art[] = [
  {
    id: 1,
    artist: 'Artist1',
    date: '1965',
  },

  {
    id: 2,
    artist: 'Artist2',
    date: '2011',
  },
  {
    id: 3,
    artist: 'Artist3',
    date: '1748',
  },
];

type Props = unknown;
type State = {
  arts: Art[] | undefined;
};

class ArtList extends Component<Props, State> {
  state: State = {
    arts: undefined,
  };

  componentDidMount(): void {
    this.setState({
      arts: mockData,
    });
  }

  render() {
    return (
      <div className={classes.artList}>
        {!this.state.arts ? (
          <Loader />
        ) : (
          this.state.arts.map((art) => (
            <ArtCard
              key={art.id}
              id={art.id}
              artist={art.artist}
              date={art.date}
            />
          ))
        )}
      </div>
    );
  }
}

export default ArtList;
