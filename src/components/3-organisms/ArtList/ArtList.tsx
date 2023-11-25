import { SectionHeader } from '../../1-atoms/headers/Headers';
import Loader from '../../1-atoms/loader/Loader';
import SectionWrapper from '../../1-atoms/sectionWrapper/sectionWrapper';
import Select from '../../1-atoms/select/Select';
import ArtCard from '../../2-molecules/artCard/ArtCard';
import classes from './style.module.scss';
import { FC, ReactElement } from 'react';
import { Art } from '@/types';
import { useRouter } from 'next/router';

type Props = {
  artworks: Art[] | undefined;
  artPerPage: number;
};

const ArtList: FC<Props> = ({ artworks, artPerPage }): ReactElement => {
  const router = useRouter();

  const handlerChangeArtsPerPage = (nextValue: string) => {
    router.query.limit = nextValue;
    router.query.page = '1';
    router.push({
      pathname: router.pathname,
      query: router.query,
    });
  };

  return (
    <section className={classes.artList}>
      <SectionWrapper className={classes.wrapper}>
        <SectionHeader
          additionalElems={
            <Select
              defaultText="Arts per page"
              options={[
                { value: '10', text: '10 arts' },
                { value: '15', text: '15 arts' },
                { value: '20', text: '20 arts' },
              ]}
              value={`${artPerPage}`}
              onChange={handlerChangeArtsPerPage}
            />
          }
        >
          Artworks
        </SectionHeader>

        {!artworks ? (
          <Loader />
        ) : artworks.length === 0 ? (
          <div>No matches found</div>
        ) : (
          <div className={classes.artListInner}>
            {artworks.map((art) => (
              <ArtCard key={art.id} art={art} />
            ))}
          </div>
        )}
      </SectionWrapper>
    </section>
  );
};

export default ArtList;
