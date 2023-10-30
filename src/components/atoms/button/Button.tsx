import classes from './style.module.scss';
import { Component, MouseEventHandler } from 'react';

type Props = {
  children: string;
  onClick: MouseEventHandler<HTMLButtonElement>;
  className?: string;
};
type State = unknown;

class Button extends Component<Props, State> {
  render() {
    const className = this.props.className
      ? classes.button + ' ' + this.props.className
      : classes.button;

    return (
      <button className={className} onClick={this.props.onClick}>
        {this.props.children}
      </button>
    );
  }
}

export default Button;
