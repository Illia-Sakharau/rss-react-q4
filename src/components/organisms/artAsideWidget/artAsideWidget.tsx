import { useParams } from 'react-router-dom';
// import classes from './style.module.scss';
import { FC, ReactElement } from 'react';
import AsideWidget from '../../molecules/asideWidget/asideWidget';

type Props = unknown;

const ArtAsideWidget: FC<Props> = (): ReactElement => {
  const artID = useParams().artID;

  return (
    <AsideWidget
      linkFrom={{
        pathname: `/gallery`,
        search: location.search,
      }}
    >
      <div>ART {artID}</div>
    </AsideWidget>
  );
};

export default ArtAsideWidget;
