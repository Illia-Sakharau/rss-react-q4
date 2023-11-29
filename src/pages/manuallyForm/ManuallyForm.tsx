import classes from './style.module.scss';
import { FC, ReactElement } from 'react';

type Props = unknown;

const ManuallyForm: FC<Props> = (): ReactElement => {
  return (
    <div className={classes.page}>
      <h2>Manually Form Page</h2>
    </div>
  );
};

export default ManuallyForm;
