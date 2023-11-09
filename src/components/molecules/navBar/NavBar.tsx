import { NavLink } from 'react-router-dom';
import classes from './style.module.scss';
import { FC, ReactElement } from 'react';
import { linkInfo } from '../../../types';

type Props = {
  linksInBar: linkInfo[];
};

const NavBar: FC<Props> = ({ linksInBar }): ReactElement => {
  return (
    <nav className={classes.navBar}>
      {linksInBar.map((linkInfo) => (
        <NavLink
          to={linkInfo.to}
          className={({ isActive }) => (isActive ? classes.active : '')}
          key={linkInfo.text}
        >
          {linkInfo.text}
        </NavLink>
      ))}
    </nav>
  );
};

export default NavBar;
