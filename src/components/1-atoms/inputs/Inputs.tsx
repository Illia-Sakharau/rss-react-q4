import { FieldError, RefCallBack } from 'react-hook-form';
import classes from './style.module.scss';
import {
  DetailedHTMLProps,
  InputHTMLAttributes,
  ReactElement,
  forwardRef,
} from 'react';
import { ValidationError } from 'yup';

type Props = {
  type: 'text' | 'number' | 'email' | 'password' | 'file';
  label: string;
  error: FieldError | ValidationError | undefined;
  required?: boolean;
  ref: RefCallBack;
  additionalEl?: ReactElement;
} & DetailedHTMLProps<InputHTMLAttributes<HTMLInputElement>, HTMLInputElement>;

const Input = forwardRef<HTMLInputElement, Props>(
  (
    {
      type,
      label,
      error,
      required,
      name,
      onBlur,
      onChange,
      additionalEl,
      ...props
    },
    ref
  ) => {
    const className = !error
      ? classes['input-wrapper']
      : `${classes['input-wrapper']} ${classes['input-wrapper_error']}`;

    return (
      <div className={className}>
        <div className={classes.header}>
          <label className={required ? classes.required : ''} htmlFor={label}>
            {label}
          </label>
          {additionalEl && additionalEl}
        </div>
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

export default Input;
