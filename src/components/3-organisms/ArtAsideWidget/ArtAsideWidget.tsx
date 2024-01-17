import { FC, ReactElement } from 'react';
import AsideWidget from '../../2-molecules/asideWidget/asideWidget';
import ArtDetails from '../../2-molecules/asideWidgetInners/ArtDetails';
import { useRouter } from 'next/router';
import { Art } from '@/types';

type Props = {
  artInfo: Art | undefined;
};

const ArtAsideWidget: FC<Props> = ({ artInfo }): ReactElement => {
  const router = useRouter();
  const queryParams = router.asPath.split('?')[1] || '';

  return (
    <AsideWidget
      linkFrom={{
        pathname: `/${router.pathname.split('/').reverse()[1]}`,
        search: queryParams,
      }}
    >
      <ArtDetails artInfo={artInfo} />
    </AsideWidget>
  );
};

export default ArtAsideWidget;
