import classes from './style.module.scss';
import { Component } from 'react';

type Props = {
  children: string;
  className?: string;
};
type State = unknown;

class Button extends Component<Props, State> {
  render() {
    const className = this.props.className
      ? classes.button + ' ' + this.props.className
      : classes.button;

    return <button className={className}>{this.props.children}</button>;
  }
}

export default Button;
