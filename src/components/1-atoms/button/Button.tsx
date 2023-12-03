import classes from './style.module.scss';
import {
  ButtonHTMLAttributes,
  DetailedHTMLProps,
  FC,
  ReactElement,
} from 'react';

type Props = {
  children: React.ReactNode;
  className?: string;
} & DetailedHTMLProps<
  ButtonHTMLAttributes<HTMLButtonElement>,
  HTMLButtonElement
>;

const Button: FC<Props> = ({ children, className, ...props }): ReactElement => {
  const finalClassName = className
    ? classes.button + ' ' + className
    : classes.button;

  return (
    <button className={finalClassName} {...props}>
      {children}
    </button>
  );
};

export default Button;
