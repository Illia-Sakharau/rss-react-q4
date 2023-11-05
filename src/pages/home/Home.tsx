import classes from './style.module.scss';
import { FC, ReactElement } from 'react';
import { SectionHeader } from '../../components/atoms/headers/Headers';

type Props = unknown;

const Error: FC<Props> = (): ReactElement => {
  return (
    <div className={classes.page}>
      <SectionHeader>Home Page</SectionHeader>
    </div>
  );
};

export default Error;
