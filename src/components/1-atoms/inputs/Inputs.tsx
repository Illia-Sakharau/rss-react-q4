import { FieldError, RefCallBack } from 'react-hook-form';
import classes from './style.module.scss';
import {
  ChangeEvent,
  DetailedHTMLProps,
  InputHTMLAttributes,
  forwardRef,
} from 'react';

type Props = {
  type: 'text' | 'number' | 'email' | 'password';
  label: string;
  error: FieldError | undefined;
  required?: boolean;
  name: string;
  ref: RefCallBack;
  onBlur: (e: ChangeEvent<HTMLInputElement>) => void;
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
} & DetailedHTMLProps<InputHTMLAttributes<HTMLInputElement>, HTMLInputElement>;

export const TextfullInput = forwardRef<HTMLInputElement, Props>(
  ({ type, label, error, required, name, onBlur, onChange, ...props }, ref) => {
    const className = !error
      ? classes['input-wrapper']
      : `${classes['input-wrapper']} ${classes['input-wrapper_error']}`;

    return (
      <div className={className}>
        <label className={required ? classes.required : ''} htmlFor={label}>
          {label}
        </label>
        <input
          type={type}
          id={label}
          name={name}
          onBlur={onBlur}
          onChange={onChange}
          {...props}
          ref={ref}
        />
        <div className={classes['error']}>
          {error && <p>{error.message}</p>}
        </div>
      </div>
    );
  }
);
