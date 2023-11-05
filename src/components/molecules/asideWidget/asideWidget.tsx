import { Link } from 'react-router-dom';
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
    <div className={classes.asideWidget}>
      <Link to={props.linkFrom} className={classes.dimmer}></Link>

      <div className={classes.inner}>
        <Link to={props.linkFrom} className={classes.closeBtn}>
          Close
        </Link>
        {props.children}
      </div>
    </div>
  );
};

export default AsideWidget;
