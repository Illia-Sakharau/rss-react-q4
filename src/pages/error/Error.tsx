import classes from './style.module.scss';
import { FC, ReactElement } from 'react';
import Button from '../../components/atoms/button/Button';
import { SectionHeader } from '../../components/atoms/headers/Headers';

type Props = unknown;

const Error: FC<Props> = (): ReactElement => {
  function reloadHandler() {
    location.reload();
  }

  return (
    <div className={classes.page}>
      <SectionHeader>Error Page</SectionHeader>
      <Button onClick={reloadHandler}> Reload page </Button>
    </div>
  );
};

export default Error;
