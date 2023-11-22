import { artworksAPI } from '../../../API/aicAPI';
import { useAppDispatch, useAppSelector } from '../../../hooks/redux';
import { gallerySlice } from '../../../store/reducers/GallarySlice';
import { SectionHeader } from '../../1-atoms/headers/Headers';
import Loader from '../../1-atoms/loader/Loader';
import SectionWrapper from '../../1-atoms/sectionWrapper/sectionWrapper';
import Select from '../../1-atoms/select/Select';
import ArtCard from '../../2-molecules/artCard/ArtCard';
import classes from './style.module.scss';
import { FC, ReactElement } from 'react';

type Props = unknown;

const ArtList: FC<Props> = (): ReactElement => {
  const { artPerPage, currentPage, searchText, isLoading } = useAppSelector(
    (state) => state.galleryReducer
  );
  const { setCurrentPage, setArtPerPage } = gallerySlice.actions;

  const { data } = artworksAPI.useFetchArtworksBySearchQuery({
    limit: artPerPage,
    page: currentPage,
    text: searchText,
  });

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
              value={`${artPerPage}`}
              onChange={(value: string) => {
                dispatch(setCurrentPage(1));
                dispatch(setArtPerPage(+value));
              }}
            />
          }
        >
          Artworks
        </SectionHeader>

        {!data || isLoading ? (
          <Loader />
        ) : data.length === 0 ? (
          <div>No matches found</div>
        ) : (
          <div className={classes.artListInner}>
            {data.map((art) => (
              <ArtCard key={art.id} art={art} />
            ))}
          </div>
        )}
      </SectionWrapper>
    </section>
  );
};

export default ArtList;
