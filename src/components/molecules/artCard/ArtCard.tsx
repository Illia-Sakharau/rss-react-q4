import { Art } from '../../../types';
import classes from './style.module.scss';
import { Component } from 'react';

type Props = Art;
type State = unknown;

class ArtCard extends Component<Props, State> {
  render() {
    return (
      <div className={classes.artCard}>
        <h3>{this.props.artist}</h3>
        <h6>{this.props.date}</h6>
      </div>
    );
  }
}

export default ArtCard;
