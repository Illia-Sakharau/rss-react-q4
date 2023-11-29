import classes from './style.module.scss';
import { FC, ReactElement } from 'react';
import { Outlet } from 'react-router-dom';
import Header from '../../components/3-organisms/header/Header';

type Props = unknown;

const RootLayout: FC<Props> = (): ReactElement => {
  return (
    <div className={classes.layout}>
      <Header />
      <Outlet />
    </div>
  );
};

export default RootLayout;
