import classes from './style.module.scss';
import { FC, ReactElement } from 'react';
import { NavLink, Outlet } from 'react-router-dom';
import SectionWrapper from '../../components/atoms/sectionWrapper/sectionWrapper';

type Props = unknown;

const RootLayout: FC<Props> = (): ReactElement => {
  return (
    <div className={classes.layout}>
      <SectionWrapper className={classes.footer}>
        <header>
          <h1>exhi</h1>
          <nav>
            <NavLink to="/">Home</NavLink>
            <NavLink to="/gallery">Gallery</NavLink>
          </nav>
        </header>
      </SectionWrapper>
      <Outlet />
      <SectionWrapper className={classes.footer}>
        <footer>FOOTER</footer>
      </SectionWrapper>
    </div>
  );
};

export default RootLayout;
