import classes from './style.module.scss';
import { FC, ReactElement } from 'react';

type Props = {
  options: {
    value: string;
    text: string;
  }[];
  defaultText?: string;
  value: string;
  onChange: (value: string) => void;
  className?: string;
};

const Select: FC<Props> = (props): ReactElement => {
  const className = props.className
    ? classes.select + ' ' + props.className
    : classes.select;

  return (
    <div className={className}>
      <select
        value={props.value}
        onChange={(event) => props.onChange(event.target.value)}
      >
        {!!props.defaultText && (
          <option disabled value={''}>
            {props.defaultText}
          </option>
        )}
        {props.options.map((option) => (
          <option value={option.value} key={option.value}>
            {option.text}
          </option>
        ))}
      </select>
    </div>
  );
};

export default Select;
