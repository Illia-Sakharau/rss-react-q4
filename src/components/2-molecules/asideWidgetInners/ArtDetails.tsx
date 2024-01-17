import { Art } from '@/types';
import Loader from '../../1-atoms/loader/Loader';
import RowInfo from './RowInfo';
import classes from './style.module.scss';
import { FC, ReactElement } from 'react';

type Props = {
  artInfo: Art | undefined;
};

const ArtDetails: FC<Props> = ({ artInfo }): ReactElement => {
  return (
    <div className={classes.wrapper}>
      {!artInfo ? (
        <Loader />
      ) : (
        <>
          <div className={classes.imageWrapper}>
            <img src={artInfo.imgURL} alt={artInfo.imgAlt} />
          </div>

          <h3 className={classes.title}>{artInfo.title}</h3>
          <RowInfo title="Artist" text={artInfo.artist} />
          <RowInfo title="Date" text={artInfo.date} />
          <RowInfo title="Category" text={artInfo.category} />
          <RowInfo
            title="Provenance"
            text={artInfo.provenance}
            className={classes.rowText}
          />
        </>
      )}
    </div>
  );
};

export default ArtDetails;
