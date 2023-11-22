import Head from 'next/head';
import classes from '@/styles/Home.module.scss';
import { SectionHeader } from '@/components/1-atoms/headers/Headers';
import Link from 'next/link';

export default function Home() {
  return (
    <>
      <Head>
        <title>exhi - Gallery page</title>
        <meta
          name="description"
          content="Training project for the study of React"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/fav.svg" />
      </Head>
      <main>
        <div className={classes.page}>
          <SectionHeader>Gallery</SectionHeader>
          <Link href={'/404'}>404</Link>
        </div>
      </main>
    </>
  );
}
