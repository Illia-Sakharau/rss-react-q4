import classes from './style.module.scss';
import { Component } from 'react';

type Props = {
  className?: string;
  type: string;
  placeholder?: string;
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
        placeholder={this.props.placeholder}
      />
    );
  }
}

export default Input;
