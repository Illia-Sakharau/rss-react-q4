import classes from './style.module.scss';
import { Component } from 'react';
import Button from '../../components/atoms/button/Button';
import { SectionHeader } from '../../components/atoms/headers/Headers';

type Props = unknown;
type State = unknown;

class Error extends Component<Props, State> {
  reloadHandler = () => {
    location.reload();
  };

  render() {
    return (
      <div className={classes.page}>
        <SectionHeader>Error Page</SectionHeader>
        <Button onClick={this.reloadHandler}> Reload page </Button>
      </div>
    );
  }
}

export default Error;
