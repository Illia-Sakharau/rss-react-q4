import { PageHeader } from '../../components/1-atoms/headers/Headers';
import SectionWrapper from '../../components/1-atoms/sectionWrapper/sectionWrapper';
import Tile from '../../components/2-molecules/tile/Tile';
import { useAppSelector } from '../../hooks/redux';
import classes from './style.module.scss';
import { FC, ReactElement } from 'react';

type Props = unknown;

const Home: FC<Props> = (): ReactElement => {
  const manuallyFormData = useAppSelector((state) => state.ManuallyFormSlice);
  const reactHookFormData = useAppSelector((state) => state.ReactHookFormSlice);

  return (
    <main className={classes.page}>
      <PageHeader title={'Home Page'} className={classes.header} />
      <SectionWrapper className={classes.wrapper}>
        <Tile
          data={manuallyFormData}
          linkPath={'/manually-form'}
          title={'Form 1'}
          subtitle={'Manually Form'}
        />
        <Tile
          data={reactHookFormData}
          linkPath={'/react-hook-form'}
          title={'Form 2'}
          subtitle={'React Hook Form'}
        />
      </SectionWrapper>
    </main>
  );
};

export default Home;
