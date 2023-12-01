import { PageHeader } from '../../components/1-atoms/headers/Headers';
import SectionWrapper from '../../components/1-atoms/sectionWrapper/sectionWrapper';
import Tile from '../../components/2-molecules/tile/Tile';
import { useAppSelector } from '../../hooks/redux';
import classes from './style.module.scss';
import { FC, ReactElement } from 'react';

type Props = unknown;

const Home: FC<Props> = (): ReactElement => {
  const { submitions } = useAppSelector((state) => state.FormsSubmissionsSlice);

  return (
    <main className={classes.page}>
      {submitions.length === 0 ? (
        <PageHeader
          title="Home Page"
          subtitle="No submited data"
          className={classes.header}
        />
      ) : (
        <>
          <PageHeader title={'Home Page'} className={classes.header} />
          <SectionWrapper className={classes.wrapper}>
            {submitions.map((submitInfo) => (
              <Tile submitInfo={submitInfo} key={submitInfo.id} />
            ))}
          </SectionWrapper>
        </>
      )}
    </main>
  );
};

export default Home;
