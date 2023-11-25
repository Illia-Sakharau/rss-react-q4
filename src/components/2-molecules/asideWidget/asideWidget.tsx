import Link from 'next/link';
import classes from './style.module.scss';
import { FC, ReactElement } from 'react';

type Props = {
  children: ReactElement;
  linkFrom: {
    pathname: string;
    search: string;
  };
};

const AsideWidget: FC<Props> = (props): ReactElement => {
  return (
    <div className={classes.asideWidget} data-testid={'aside-widget'}>
      <Link href={props.linkFrom} className={classes.dimmer}></Link>

      <div className={classes.inner}>
        <Link href={props.linkFrom} className={classes.closeBtn}>
          Close
        </Link>
        {props.children}
      </div>
    </div>
  );
};

export default AsideWidget;
