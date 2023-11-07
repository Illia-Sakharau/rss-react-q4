import classes from './style.module.scss';
import { FC, ReactElement } from 'react';
import { SectionHeader } from '../../components/atoms/headers/Headers';
import { Link } from 'react-router-dom';

type Props = unknown;

const Error: FC<Props> = (): ReactElement => {
  return (
    <div className={classes.page}>
      <SectionHeader>Home Page</SectionHeader>
      <Link to={'/gallery'}>Gallery</Link>
    </div>
  );
};

export default Error;
