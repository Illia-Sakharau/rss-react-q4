import classes from './style.module.scss';
import { FC, ReactElement } from 'react';

type Props = {
  title: string;
  text: string;
  className?: string;
};

const RowInfo: FC<Props> = (props): ReactElement => {
  const className = props.className
    ? classes.rowInfo + ' ' + props.className
    : classes.rowInfo;

  return (
    <div className={className} data-testid="test-row">
      <h6 className={classes.rowInfoTitle}>{props.title}</h6>
      <div className={classes.rowInfoText}>{props.text}</div>
    </div>
  );
};

export default RowInfo;
