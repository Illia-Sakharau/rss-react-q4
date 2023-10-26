import classes from './style.module.scss';
import { Component } from 'react';

class Loader extends Component {
  render() {
    return <div className={classes.loader}>Loading...</div>;
  }
}

export default Loader;
