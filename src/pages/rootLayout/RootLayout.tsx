import classes from './style.module.scss';
import { FC, ReactElement } from 'react';
import { Outlet } from 'react-router-dom';
import Header from '../../components/organisms/Header/Header';
import Footer from '../../components/organisms/Footer/Footer';

type Props = unknown;

const RootLayout: FC<Props> = (): ReactElement => {
  return (
    <div className={classes.layout}>
      <Header />
      <Outlet />
      <Footer />
    </div>
  );
};

export default RootLayout;
