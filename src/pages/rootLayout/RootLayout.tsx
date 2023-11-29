import classes from './style.module.scss';
import { FC, ReactElement } from 'react';
import { Link, Outlet } from 'react-router-dom';

type Props = unknown;

const RootLayout: FC<Props> = (): ReactElement => {
  return (
    <div className={classes.layout}>
      <nav>
        <Link to="">Home</Link>
        <Link to="/manually-form">Manually Form</Link>
        <Link to="/react-hook-form">React Hook Form</Link>
      </nav>
      <Outlet />
    </div>
  );
};

export default RootLayout;
