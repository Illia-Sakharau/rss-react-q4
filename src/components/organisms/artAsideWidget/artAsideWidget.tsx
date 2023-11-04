import { Link, useParams } from 'react-router-dom';
import classes from './style.module.scss';
import { FC, ReactElement } from 'react';

type Props = unknown;

const ArtAsideWidget: FC<Props> = (): ReactElement => {
  const artID = useParams().artID;

  return (
    <Link to={`/gallery`}>
      <div className={classes.artAsideWidget}>ART {artID}</div>
    </Link>
  );
};

export default ArtAsideWidget;
