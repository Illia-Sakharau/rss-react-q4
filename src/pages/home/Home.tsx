import classes from './style.module.scss';
import { FC, ReactElement, useEffect, useState } from 'react';
import { SectionHeader } from '../../components/atoms/headers/Headers';
import { Link } from 'react-router-dom';
import Button from '../../components/atoms/button/Button';

type Props = unknown;

const Home: FC<Props> = (): ReactElement => {
  const [error, setError] = useState<boolean>(false);

  useEffect(() => {
    if (error) {
      throw new Error('ERRORRRRR...');
    }
  }, [error]);

  return (
    <>
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
