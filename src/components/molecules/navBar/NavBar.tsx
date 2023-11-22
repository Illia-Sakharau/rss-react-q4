import classes from './style.module.scss';
import { FC, ReactElement } from 'react';
import { linkInfo } from '../../../types';
import Link from 'next/link';
import { useRouter } from 'next/router';

type Props = {
  linksInBar: linkInfo[];
  className?: string;
};

const NavBar: FC<Props> = (props): ReactElement => {
  const router = useRouter();
  const className = props.className
    ? classes.navBar + ' ' + props.className
    : classes.navBar;

  return (
    <nav className={className}>
      {props.linksInBar.map((linkInfo) => (
        <Link
          href={linkInfo.to}
          className={router.pathname === linkInfo.to ? classes.active : ''}
          aria-current={router.pathname === linkInfo.to ? 'page' : 'false'}
          key={linkInfo.text}
        >
          {linkInfo.text}
        </Link>
      ))}
    </nav>
  );
};

export default NavBar;
