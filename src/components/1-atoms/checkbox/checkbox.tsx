import { FieldError, RefCallBack } from 'react-hook-form';
import classes from './style.module.scss';
import {
  ChangeEvent,
  DetailedHTMLProps,
  InputHTMLAttributes,
  forwardRef,
} from 'react';

type Props = {
  label: string;
  error: FieldError | undefined;
  required?: boolean;
  name: string;
  ref: RefCallBack;
  onBlur: (e: ChangeEvent<HTMLInputElement>) => void;
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
} & DetailedHTMLProps<InputHTMLAttributes<HTMLInputElement>, HTMLInputElement>;

const Checkbox = forwardRef<HTMLInputElement, Props>(
  ({ label, error, required, name, onBlur, onChange, ...props }, ref) => {
    const containerClassName = required
      ? `${classes.container} ${classes.required}`
      : classes.container;
    return (
      <div className={classes['input-wrapper']}>
        <label className={containerClassName} htmlFor={label}>
          <input
            type={'checkbox'}
            id={label}
            name={name}
            onBlur={onBlur}
            onChange={onChange}
            {...props}
            ref={ref}
          />
          <span className={classes.checkmark}></span>
          {label}
        </label>
        <div className={classes['error']}>
          {error && <p>{error.message}</p>}
        </div>
      </div>
    );
  }
);

export default Checkbox;
