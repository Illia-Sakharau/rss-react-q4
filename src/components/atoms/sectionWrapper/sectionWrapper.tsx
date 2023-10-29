import classes from './style.module.scss';
import { Component } from 'react';
type Props = {
  className?: string;
  children: React.ReactElement | React.ReactElement[];
};
type State = unknown;

class SectionWrapper extends Component<Props, State> {
  render() {
    const className = this.props.className
      ? classes.sectionWrapper + ' ' + this.props.className
      : classes.sectionWrapper;

    return <div className={className}>{this.props.children}</div>;
  }
}

export default SectionWrapper;
