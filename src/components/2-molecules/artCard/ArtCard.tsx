import Link from 'next/link';
import { Art } from '../../../types';
import classes from './style.module.scss';
import { FC, ReactElement } from 'react';
import { useRouter } from 'next/router';

type Props = {
  art: Art;
};

const ArtCard: FC<Props> = ({ art }): ReactElement => {
  const router = useRouter();
  const queryParams = router.asPath.split('?')[1] || '';

  return (
    <Link href={`/gallery/${art.id}?${queryParams}`}>
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
