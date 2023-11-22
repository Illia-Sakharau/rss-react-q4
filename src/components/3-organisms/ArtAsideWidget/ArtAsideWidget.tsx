import { useParams } from 'react-router-dom';
import { FC, ReactElement } from 'react';
import AsideWidget from '../../2-molecules/asideWidget/asideWidget';
import ArtDetails from '../../2-molecules/asideWidgetInners/ArtDetails';

type Props = unknown;

const ArtAsideWidget: FC<Props> = (): ReactElement => {
  const artID = useParams().artID;

  return (
    <AsideWidget
      linkFrom={{
        pathname: `/${location.pathname.split('/').reverse()[1]}`,
        search: location.search,
      }}
    >
      <ArtDetails artID={`${artID}`} />
    </AsideWidget>
  );
};

export default ArtAsideWidget;
