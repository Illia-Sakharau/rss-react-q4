import { Link } from 'react-router-dom';
import { Art } from '../../../types';
import classes from './style.module.scss';
import { FC, ReactElement } from 'react';

type Props = {
  art: Art;
};

const ArtCard: FC<Props> = ({ art }): ReactElement => {
  return (
    <Link to={`./${art.id}`}>
      <div className={classes.artCard}>
        <div className={classes.imageWrapper}>
          <img src={art.imgURL} alt={art.imgAlt} />
        </div>
        <div className={classes.descriptionWrapper}>
          <div className={classes.title}>{art.title}</div>
          <div className={classes.artist}>{art.artist}</div>
          <div className={classes.date}>{art.date}</div>
        </div>
      </div>
    </Link>
  );
};

export default ArtCard;
