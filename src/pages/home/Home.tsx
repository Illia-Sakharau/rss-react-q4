import classes from './style.module.scss';
import { FC, ReactElement, useEffect, useState } from 'react';
import { SectionHeader } from '../../components/atoms/headers/Headers';
import { Link } from 'react-router-dom';
import Button from '../../components/atoms/button/Button';
import { artworksAPI } from '../../API/aicAPI';

type Props = unknown;

const Home: FC<Props> = (): ReactElement => {
  const [error, setError] = useState<boolean>(false);

  const { data, isLoading } = artworksAPI.useFetchArtworksBySearchQuery({
    limit: 12,
    page: 2,
    text: 'monet',
  });

  useEffect(() => {
    if (error) {
      throw new Error('ERRORRRRR...');
    }
  }, [error]);

  return (
    <>
      {isLoading ? (
        <div>loading</div>
      ) : (
        <button
          onClick={() => {
            console.log(data);
          }}
        >
          log data
        </button>
      )}
      <Button
        onClick={() => setError(true)}
        className={classes.errorBtn}
      >{`>>> ERROR BUTTON <<<`}</Button>
      <div className={classes.page}>
        <SectionHeader>Home Page</SectionHeader>
        <Link to={'/404'}>404</Link>
      </div>
    </>
  );
};

export default Home;
