import { artworksAPI } from '../../../API/aicAPI';
import { useAppDispatch } from '../../../hooks/redux';
import { artDetailsSlice } from '../../../store/reducers/ArtDetailsSlice';
import Loader from '../../atoms/loader/Loader';
import RowInfo from './RowInfo';
import classes from './style.module.scss';
import { FC, ReactElement, useEffect } from 'react';

type Props = {
  artID: string;
};

const ArtDetails: FC<Props> = (props): ReactElement => {
  const { data, isFetching } = artworksAPI.useFetchArtworkQuery(props.artID);
  const { setIsLoading } = artDetailsSlice.actions;
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(setIsLoading(isFetching));

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isFetching]);

  return (
    <div className={classes.wrapper}>
      {isFetching || !data ? (
        <Loader />
      ) : (
        <>
          <div className={classes.imageWrapper}>
            <img src={data.imgURL} alt={data.imgAlt} />
          </div>

          <h3 className={classes.title}>{data.title}</h3>
          <RowInfo title="Artist" text={data.artist} />
          <RowInfo title="Date" text={data.date} />
          <RowInfo title="Category" text={data.category} />
          <RowInfo
            title="Provenance"
            text={data.provenance}
            className={classes.rowText}
          />
        </>
      )}
    </div>
  );
};

export default ArtDetails;
