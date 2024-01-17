import GalleryLayout from '@/components/4-layouts/galleryPage/Gallery';
import { wrapper } from '@/store/store';
import { GetServerSideProps, InferGetServerSidePropsType } from 'next';
import Head from 'next/head';
import { artworksAPI } from '@/API/aicAPI';
import adapter from '@/utils/adapter';
import { Art, ResponseInfo } from '@/types';
import ArtAsideWidget from '@/components/3-organisms/ArtAsideWidget/ArtAsideWidget';

export default function ArtworksDetails({
  totalPages,
  artworks,
  currentPage,
  artPerPage,
  searchText,
  openedArt,
}: InferGetServerSidePropsType<typeof getServerSideProps>) {
  return (
    <>
      <Head>
        <title>{`exhi - ${(openedArt as unknown as Art).title}`}</title>
        <meta
          name="description"
          content="Training project for the study of React"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/fav.svg" />
      </Head>
      <main>
        <GalleryLayout
          currentPage={currentPage}
          totalPages={totalPages}
          artworks={artworks}
          artPerPage={artPerPage}
          searchText={searchText}
          asideWidget={<ArtAsideWidget artInfo={openedArt} />}
        />
      </main>
    </>
  );
}

export const getServerSideProps = wrapper.getServerSideProps(
  (store) => async (context) => {
    const id = context.params?.id;
    const artPerPage = context.query.limit
      ? Math.max(Math.min(+context.query.limit, 50), 0)
      : 10;
    const searchText = (context.query.search as string) || '';
    let currentPage = context.query.page ? Math.max(+context.query.page, 1) : 1;
    let totalPages = 1;
    let artworks: Art[] = [];
    let openedArt: Art | undefined = undefined;

    store.dispatch(
      artworksAPI.endpoints.fetchArtworksBySearch.initiate({
        text: searchText,
        limit: artPerPage,
        page: currentPage,
      })
    );
    await Promise.all(
      store.dispatch(artworksAPI.util.getRunningQueriesThunk())
    ).then((res) => {
      const data = res[res.length - 1].data as ResponseInfo;
      totalPages = Math.min(data.pagination.total_pages, 900 / artPerPage);
      artworks = data.data.map((art) => adapter(art));
      currentPage = Math.min(currentPage, totalPages);
    });

    if (id) {
      store.dispatch(artworksAPI.endpoints.fetchArtwork.initiate(`${id}`));
      await Promise.all(
        store.dispatch(artworksAPI.util.getRunningQueriesThunk())
      ).then((res) => {
        openedArt = res[res.length - 1].data as Art;
      });
    }

    return {
      props: {
        totalPages,
        artworks,
        currentPage,
        artPerPage,
        searchText,
        openedArt,
      },
    };
  }
) satisfies GetServerSideProps;
