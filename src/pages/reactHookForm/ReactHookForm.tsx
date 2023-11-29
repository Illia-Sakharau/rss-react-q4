import classes from './style.module.scss';
import { FC, ReactElement } from 'react';

type Props = unknown;

const ReactHookForm: FC<Props> = (): ReactElement => {
  return (
    <div className={classes.page}>
      <h2>React Hook Form Page</h2>
    </div>
  );
};

export default ReactHookForm;
