import classes from './style.module.scss';
import { FC, ReactElement } from 'react';

type Props = unknown;

const Error: FC<Props> = (): ReactElement => {
  function reloadHandler() {
    location.reload();
  }

  return (
    <div className={classes.page}>
      <h2>Error Page</h2>
      <button onClick={reloadHandler}>Reload page</button>
    </div>
  );
};

export default Error;
