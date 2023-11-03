import classes from './style.module.scss';
import { FC, MouseEventHandler, ReactElement } from 'react';

type Props = {
  children: React.ReactNode;
  onClick: MouseEventHandler<HTMLButtonElement>;
  className?: string;
};

const Button: FC<Props> = (props): ReactElement => {
  const className = props.className
    ? classes.button + ' ' + props.className
    : classes.button;

  return (
    <button className={className} onClick={props.onClick}>
      {props.children}
    </button>
  );
};

export default Button;
