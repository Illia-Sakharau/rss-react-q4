import Button from '../../components/1-atoms/button/Button';
import { PageHeader } from '../../components/1-atoms/headers/Headers';
import classes from './style.module.scss';
import { FC, ReactElement } from 'react';

type Props = unknown;

const Error: FC<Props> = (): ReactElement => {
  function reloadHandler() {
    location.reload();
  }

  return (
    <div className={classes.page}>
      <PageHeader title={'Error Page'} className={classes.header} />
      <Button onClick={reloadHandler}>Reload page</Button>
    </div>
  );
};

export default Error;
