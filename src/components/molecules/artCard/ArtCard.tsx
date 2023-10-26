import { Art } from '../../../types';
import classes from './style.module.scss';
import { Component } from 'react';

type Props = {
  art: Art;
};
type State = unknown;

class ArtCard extends Component<Props, State> {
  render() {
    return (
      <div className={classes.artCard}>
        <div className={classes.imageWrapper}>
          <img src={this.props.art.imgURL} alt="image" />
        </div>
        <div className={classes.descriptionWrapper}>
          <div className={classes.title}>{this.props.art.title}</div>
          <div className={classes.artist}>{this.props.art.artist}</div>
          <div className={classes.date}>{this.props.art.date}</div>
        </div>
      </div>
    );
  }
}

export default ArtCard;
