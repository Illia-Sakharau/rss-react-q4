import { Art } from '../../../types';
import { SectionHeader } from '../../atoms/headers/Headers';
import Loader from '../../atoms/loader/Loader';
import SectionWrapper from '../../atoms/sectionWrapper/sectionWrapper';
import ArtCard from '../../molecules/artCard/ArtCard';
import classes from './style.module.scss';
import { Component } from 'react';

type Props = {
  arts: Art[] | undefined;
};
type State = unknown;

class ArtList extends Component<Props, State> {
  render() {
    return (
      <section className={classes.artList}>
        <SectionWrapper className={classes.wrapper}>
          <SectionHeader>Artworks</SectionHeader>
          {!this.props.arts ? (
            <Loader />
          ) : (
            <div className={classes.artListInner}>
              {this.props.arts.map((art) => (
                <ArtCard key={art.id} art={art} />
              ))}
            </div>
          )}
        </SectionWrapper>
      </section>
    );
  }
}

// class ArtList extends Component<Props, State> {
//   static contextType = ArtsContext

//   state: State = {
//     arts: undefined,
//   };

//   componentDidMount(): void {
//     const arts = this.context

//     console.log(arts)

//     ArtworksAPI.getArtworks(10, 1)
//       .then((resp) => resp.data.map((artworkInfo) => adapter(artworkInfo)))
//       .then((artworks) =>
//         this.setState({
//           arts: artworks,
//         })
//       );
//   }

//   render() {
//     return (
//       <section className={classes.artList}>
//         <SectionWrapper className={classes.wrapper}>
//           <SectionHeader>Artworks</SectionHeader>
//           {!this.state.arts ? (
//             <Loader />
//           ) : (
//             <div className={classes.artListInner}>
//               {this.state.arts.map((art) => (
//                 <ArtCard key={art.id} art={art} />
//               ))}
//             </div>
//           )}
//         </SectionWrapper>
//       </section>
//     );
//   }
// }

export default ArtList;
