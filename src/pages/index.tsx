import Head from 'next/head';
import classes from '@/styles/HomePage.module.scss';
import Button from '@/components/1-atoms/button/Button';
import { SectionHeader } from '@/components/1-atoms/headers/Headers';
import Link from 'next/link';
import { useState } from 'react';
import Error from 'next/error';

export default function Home() {
  const [error, setError] = useState<boolean>(false);

  if (error) {
    return <Error statusCode={500} />;
  }

  return (
    <>
      <Head>
        <title>exhi - Home page</title>
        <meta
          name="description"
          content="Training project for the study of React"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/fav.svg" />
      </Head>
      <main>
        <Button
          onClick={() => setError(true)}
          className={classes.errorBtn}
        >{`>>> ERROR BUTTON <<<`}</Button>
        <div className={classes.page}>
          <SectionHeader>Home Page</SectionHeader>
          <Link href={'/404'}>404</Link>
        </div>
      </main>
    </>
  );
}
