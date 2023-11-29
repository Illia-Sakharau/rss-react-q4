import classes from './style.module.scss';
import { FC, ReactElement } from 'react';
import { linkInfo } from '../../../types';
import NavBar from '../../2-molecules/navBar/NavBar';

type Props = unknown;

const linksInBar: linkInfo[] = [
  {
    to: '/',
    text: 'Home',
  },
  {
    to: '/manually-form',
    text: 'Form 1',
  },
  {
    to: '/react-hook-form',
    text: 'Form 2',
  },
];

const Header: FC<Props> = (): ReactElement => {
  return (
    <header className={classes.header}>
      <NavBar linksInBar={linksInBar} />
    </header>
  );
};

export default Header;
