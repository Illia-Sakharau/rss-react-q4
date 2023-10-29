import { Art } from '../../../types';
import Loader from '../../atoms/loader/Loader';
import SectionWrapper from '../../atoms/sectionWrapper/sectionWrapper';
import ArtCard from '../../molecules/artCard/ArtCard';
import classes from './style.module.scss';
import { Component } from 'react';

const mockData: Art[] = [
  {
    id: 1,
    title: 'Coming Through the Rye (Over the Range)',
    artist: 'Artist1',
    date: '1965',
    imgURL:
      'https://www.artic.edu/iiif/2/0ac2d0af-bf1e-522b-943f-0c47ec9a28f6/full/400,/0/default.jpg',
  },
  {
    id: 2,
    title: 'George Inness',
    artist:
      'Jonathan Scott Hartley (American, 1845–1912)\nCast by Roman Bronze Works (American, founded 1897)',
    date: '1891',
    imgURL:
      'https://www.artic.edu/iiif/2/0d429682-7cf8-0437-3ed9-b545d23a24f4/full/400,/0/default.jpg',
  },
  {
    id: 3,
    title: 'Standing Figure (Ibeji)',
    artist:
      'Workshop of Abogunde of Ede (active late 19th century)\nYoruba\nEde, Nigeria\nCoastal West Africa',
    date: 'Mid–19th/early 20th century',
    imgURL:
      'https://www.artic.edu/iiif/2/f97b7132-1f86-9991-5010-18ac1cf74efe/full/400,/0/default.jpg',
  },
  {
    id: 4,
    title: 'Coming Through the Rye (Over the Range)',
    artist: 'Artist1',
    date: '1965',
    imgURL:
      'https://www.artic.edu/iiif/2/bf7ffc3c-e660-064e-85ac-efb825a7ee2d/full/400,/0/default.jpg',
  },
  {
    id: 6,
    title: 'Standing Figure (Ibeji)',
    artist:
      'Workshop of Abogunde of Ede (active late 19th century)\nYoruba\nEde, Nigeria\nCoastal West Africa',
    date: 'Mid–19th/early 20th century',
    imgURL:
      'https://www.artic.edu/iiif/2/e596f8dc-781e-6cd7-e217-cf0ddca51a46/full/400,/0/default.jpg',
  },
  {
    id: 5,
    title: 'Standing Figure (Ibeji)',
    artist: 'Artist2',
    date: '2011',
    imgURL:
      'https://www.artic.edu/iiif/2/65f5b256-0d91-60ef-07c9-e09a1ddceab0/full/400,/0/default.jpg',
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
      <section className={classes.artList}>
        <SectionWrapper>
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
