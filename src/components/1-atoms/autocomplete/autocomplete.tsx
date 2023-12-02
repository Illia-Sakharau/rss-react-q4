import { FieldError, RefCallBack } from 'react-hook-form';
import {
  ChangeEvent,
  DetailedHTMLProps,
  InputHTMLAttributes,
  forwardRef,
} from 'react';
import { TextfullInput } from '../inputs/Inputs';

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
      <datalist id={`ily-${name}`}>
        {options.map((option) => (
          <option value={option} key={option} />
        ))}
      </datalist>
    );

    return (
      <TextfullInput
        {...props}
        additionalEl={additionalEl}
        list={`ily-${name}`}
        type="text"
        name={name}
        ref={ref}
      />
    );
  }
);
export default Autocomplete;
