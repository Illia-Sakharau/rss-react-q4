import classes from './style.module.scss';
import { FC, ReactElement } from 'react';
import { SectionHeader } from '../../components/atoms/headers/Headers';
import { Link } from 'react-router-dom';

type Props = unknown;

const NotFound: FC<Props> = (): ReactElement => {
  return (
    <div className={classes.page}>
      <SectionHeader>Page Not Found</SectionHeader>
      <Link to={'/'}>Home</Link>
    </div>
  );
};

export default NotFound;
