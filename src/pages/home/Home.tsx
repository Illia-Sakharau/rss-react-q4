import classes from './style.module.scss';
import { FC, ReactElement } from 'react';

type Props = unknown;

const Home: FC<Props> = (): ReactElement => {
  return (
    <div className={classes.page}>
      <h2>Home Page</h2>
    </div>
  );
};

export default Home;
