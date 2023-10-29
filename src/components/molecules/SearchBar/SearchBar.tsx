import Button from '../../atoms/button/Button';
import Input from '../../atoms/input/Input';
import classes from './style.module.scss';
import { Component } from 'react';

class MSearchBar extends Component {
  render() {
    return (
      <div className={classes.searchBar}>
        <Input
          type="text"
          placeholder="Enter art name..."
          className={classes.input}
        />
        <Button>Search</Button>
      </div>
    );
  }
}

export default MSearchBar;
