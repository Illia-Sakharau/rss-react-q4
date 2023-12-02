import { FieldError, RefCallBack } from 'react-hook-form';
import classes from './style.module.scss';
import {
  ChangeEvent,
  DetailedHTMLProps,
  InputHTMLAttributes,
  ReactElement,
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
  additionalEl?: ReactElement;
} & DetailedHTMLProps<InputHTMLAttributes<HTMLInputElement>, HTMLInputElement>;

export const TextfullInput = forwardRef<HTMLInputElement, Props>(
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
