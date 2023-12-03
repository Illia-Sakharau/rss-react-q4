import { FieldError, RefCallBack } from 'react-hook-form';
import {
  ChangeEvent,
  DetailedHTMLProps,
  InputHTMLAttributes,
  forwardRef,
} from 'react';
import Input from '../inputs/Inputs';

type Props = {
  options: string[];
  label: string;
  error: FieldError | undefined;
  required?: boolean;
  name: string;
  ref: RefCallBack;
  onBlur: (e: ChangeEvent<HTMLInputElement>) => void;
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
} & DetailedHTMLProps<InputHTMLAttributes<HTMLInputElement>, HTMLInputElement>;

export const Autocomplete = forwardRef<HTMLInputElement, Props>(
  ({ options, name, ...props }, ref) => {
    const additionalEl = (
      <datalist id={name}>
        {options.map((option) => (
          <option value={option} key={option} />
        ))}
      </datalist>
    );

    return (
      <Input
        {...props}
        additionalEl={additionalEl}
        list={name}
        type="text"
        name={name}
        ref={ref}
      />
    );
  }
);
export default Autocomplete;
