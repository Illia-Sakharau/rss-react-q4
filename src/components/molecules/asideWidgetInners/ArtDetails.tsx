import ArtworksAPI from '../../../API/GetCollection';
import { Art } from '../../../types';
import adapter from '../../../utils/adapter';
import Loader from '../../atoms/loader/Loader';
import RowInfo from './RowInfo';
import classes from './style.module.scss';
import { FC, ReactElement, useEffect, useState } from 'react';

type Props = {
  artID: string;
};

const ArtDetails: FC<Props> = (props): ReactElement => {
  const [artInfo, setArtInfo] = useState<Art | null>(null);

  useEffect(() => {
    ArtworksAPI.getArtworks(1, 1, [+props.artID]).then((resp) => {
      setArtInfo(adapter(resp.data[0]));
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

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
