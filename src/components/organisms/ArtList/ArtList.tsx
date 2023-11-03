import { Art } from '../../../types';
import { SectionHeader } from '../../atoms/headers/Headers';
import Loader from '../../atoms/loader/Loader';
import SectionWrapper from '../../atoms/sectionWrapper/sectionWrapper';
import ArtCard from '../../molecules/artCard/ArtCard';
import classes from './style.module.scss';
import { FC, ReactElement } from 'react';

type Props = {
  arts: Art[] | undefined;
};

const ArtList: FC<Props> = ({ arts }): ReactElement => {
  return (
    <section className={classes.artList}>
      <SectionWrapper className={classes.wrapper}>
        <SectionHeader>Artworks</SectionHeader>
        {!arts ? (
          <Loader />
        ) : (
          <div className={classes.artListInner}>
            {arts.map((art) => (
              <ArtCard key={art.id} art={art} />
            ))}
          </div>
        )}
      </SectionWrapper>
    </section>
  );
};

export default ArtList;
