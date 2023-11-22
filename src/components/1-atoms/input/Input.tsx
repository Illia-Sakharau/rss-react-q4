import classes from './style.module.scss';
import { ChangeEventHandler, FC, ReactElement } from 'react';

type Props = {
  className?: string;
  type: string;
  value: string;
  placeholder?: string;
  onChange?: ChangeEventHandler<HTMLInputElement>;
};

const Input: FC<Props> = (props): ReactElement => {
  const className = props.className
    ? classes.input + ' ' + props.className
    : classes.input;

  return (
    <input
      className={className}
      type={props.type}
      value={props.value}
      placeholder={props.placeholder}
      onChange={props.onChange}
    />
  );
};

export default Input;
