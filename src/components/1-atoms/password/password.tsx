import classes from './style.module.scss';
import { FieldError, RefCallBack } from 'react-hook-form';
import {
  ChangeEvent,
  DetailedHTMLProps,
  InputHTMLAttributes,
  forwardRef,
  useRef,
} from 'react';
import Input from '../inputs/Inputs';

const POwER_WIDTHS = ['1%', '25%', '50%', '75%', '100%'];
const POWER_COLORS = ['#C5171C', '#C86F3D', '#DEB03B', '#B6CB34', '#619C25'];
const POWER_TESTS = [
  /(?=.*\d)/,
  /(?=.*\p{Lu})/u,
  /(?=.*\p{Ll})/u,
  /(?=.*[\W_])/,
];

type Props = {
  label: string;
  error: FieldError | undefined;
  required?: boolean;
  name: string;
  ref: RefCallBack;
  onBlur: (e: ChangeEvent<HTMLInputElement>) => void;
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
} & DetailedHTMLProps<InputHTMLAttributes<HTMLInputElement>, HTMLInputElement>;

const Password = forwardRef<HTMLInputElement, Props>(
  ({ name, onChange, ...props }, ref) => {
    const pointer = useRef(null);

    const additionalEl = (
      <div className={classes['power-container']}>
        <div className={classes['power-point']} ref={pointer}></div>
      </div>
    );

    const onChangeMod = (e: ChangeEvent<HTMLInputElement>) => {
      const pointerEl = pointer.current as unknown as HTMLElement;
      const value = e.target.value;
      let point = 0;
      POWER_TESTS.forEach((item) => item.test(value) && point++);
      pointerEl.style.width = POwER_WIDTHS[point];
      pointerEl.style.backgroundColor = POWER_COLORS[point];
      onChange(e);
    };

    return (
      <Input
        {...props}
        additionalEl={additionalEl}
        list={name}
        type="password"
        name={name}
        onChange={onChangeMod}
        ref={ref}
      />
    );
  }
);
export default Password;
