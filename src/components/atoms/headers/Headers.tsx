import classes from './style.module.scss';
import { Component } from 'react';

type SectionProps = {
  children: string;
  className?: string;
};
type SectionState = unknown;

export class SectionHeader extends Component<SectionProps, SectionState> {
  render() {
    const className = this.props.className
      ? classes.sectionHeader + ' ' + this.props.className
      : classes.sectionHeader;

    return (
      <div className={className}>
        <h3>{this.props.children}</h3>
      </div>
    );
  }
}
