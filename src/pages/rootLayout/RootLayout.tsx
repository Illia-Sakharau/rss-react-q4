import classes from './style.module.scss';
import { FC, ReactElement } from 'react';
import { Outlet } from 'react-router-dom';
import SectionWrapper from '../../components/atoms/sectionWrapper/sectionWrapper';
import Header from '../../components/organisms/Header/Header';

type Props = unknown;

const RootLayout: FC<Props> = (): ReactElement => {
  return (
    <div className={classes.layout}>
      <Header />
      <Outlet />
      <SectionWrapper className={classes.footer}>
        <footer>FOOTER</footer>
      </SectionWrapper>
    </div>
  );
};

export default RootLayout;
