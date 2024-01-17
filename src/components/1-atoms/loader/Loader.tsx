import classes from './style.module.scss';
import { FC, ReactElement } from 'react';

type Props = unknown;

const Loader: FC<Props> = (): ReactElement => {
  return (
    <div className={classes.loader}>
      <div className={classes.squareLoader}></div>
      Loading...
    </div>
  );
};

export default Loader;
