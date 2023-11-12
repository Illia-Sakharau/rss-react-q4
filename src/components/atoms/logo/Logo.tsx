import { Link } from 'react-router-dom';
import classes from './style.module.scss';
import { FC, ReactElement } from 'react';

type Props = {
  className?: string;
};

const Logo: FC<Props> = (props): ReactElement => {
  const className = props.className
    ? classes.logo + ' ' + props.className
    : classes.logo;

  return (
    <Link to="/" className={className} data-testid="logo">
      <h1>exhi</h1>
    </Link>
  );
};

export default Logo;
