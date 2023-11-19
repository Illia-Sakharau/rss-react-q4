import classes from './style.module.scss';
import { FC, ReactElement } from 'react';
import NavBar from '../../molecules/navBar/NavBar';
import { linkInfo } from '../../../types';
import Logo from '../../atoms/logo/Logo';

type Props = unknown;

const linksInBar: linkInfo[] = [
  {
    to: '/',
    text: 'Home',
  },
  {
    to: '/gallery',
    text: 'Gallery',
  },
];

const Header: FC<Props> = (): ReactElement => {
  return (
    <header className={classes.header}>
      <Logo />
      <NavBar linksInBar={linksInBar} />
    </header>
  );
};

export default Header;
