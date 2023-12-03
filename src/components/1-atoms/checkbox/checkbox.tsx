import { FieldError, RefCallBack } from 'react-hook-form';
import classes from './style.module.scss';
import { DetailedHTMLProps, InputHTMLAttributes, forwardRef } from 'react';
import { ValidationError } from 'yup';

type Props = {
  label: string;
  error: FieldError | ValidationError | undefined;
  required?: boolean;
  ref: RefCallBack;
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
