import { GalleyContext, IGalleryContext } from '../../../pages/gallery/context';
import { Art } from '../../../types';
import { SectionHeader } from '../../atoms/headers/Headers';
import Loader from '../../atoms/loader/Loader';
import SectionWrapper from '../../atoms/sectionWrapper/sectionWrapper';
import Select from '../../atoms/select/Select';
import ArtCard from '../../molecules/artCard/ArtCard';
import classes from './style.module.scss';
import { FC, ReactElement, useContext } from 'react';

type Props = {
  arts: Art[] | undefined;
};

const ArtList: FC<Props> = ({ arts }): ReactElement => {
  const { selectedArtNumber, setSelectedArtNumber } = useContext(
    GalleyContext
  ) as IGalleryContext;
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
              value={selectedArtNumber}
              onChange={setSelectedArtNumber}
            />
          }
        >
          Artworks
        </SectionHeader>

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
