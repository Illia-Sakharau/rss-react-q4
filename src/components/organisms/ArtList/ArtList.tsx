import { useAppDispatch } from '../../../hooks/redux';
import { GalleyContext, IGalleryContext } from '../../../pages/gallery/context';
import { gallerySlice } from '../../../store/reducers/GallarySlice';
import { SectionHeader } from '../../atoms/headers/Headers';
import Loader from '../../atoms/loader/Loader';
import SectionWrapper from '../../atoms/sectionWrapper/sectionWrapper';
import Select from '../../atoms/select/Select';
import ArtCard from '../../molecules/artCard/ArtCard';
import classes from './style.module.scss';
import { FC, ReactElement, useContext } from 'react';

type Props = unknown;

const ArtList: FC<Props> = (): ReactElement => {
  const { selectedArtNumber, setSelectedArtNumber, arts } = useContext(
    GalleyContext
  ) as IGalleryContext;
  const { setCurrentPage } = gallerySlice.actions;
  const dispatch = useAppDispatch();
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
              onChange={(value: string) => {
                dispatch(setCurrentPage('1'));
                setSelectedArtNumber(value);
              }}
            />
          }
        >
          Artworks
        </SectionHeader>

        {!arts ? (
          <Loader />
        ) : arts.length === 0 ? (
          <div>No matches found</div>
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
