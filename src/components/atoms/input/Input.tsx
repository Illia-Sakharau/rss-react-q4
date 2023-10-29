import classes from './style.module.scss';
import { ChangeEventHandler, Component } from 'react';

type Props = {
  className?: string;
  type: string;
  value: string;
  placeholder?: string;
  onChange?: ChangeEventHandler<HTMLInputElement>;
};
type State = unknown;

class Input extends Component<Props, State> {
  render() {
    const className = this.props.className
      ? classes.input + ' ' + this.props.className
      : classes.input;

    return (
      <input
        className={className}
        type={this.props.type}
        value={this.props.value}
        placeholder={this.props.placeholder}
        onChange={this.props.onChange}
      />
    );
  }
}

export default Input;
