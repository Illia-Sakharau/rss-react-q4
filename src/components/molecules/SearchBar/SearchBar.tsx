import Button from '../../atoms/button/Button';
import Input from '../../atoms/input/Input';
import classes from './style.module.scss';
import { ChangeEvent, Component } from 'react';

type Props = {
  action: (text: string) => void;
};
type State = {
  searchText: string | null;
};

class MSearchBar extends Component<Props, State> {
  state = {
    searchText: localStorage.getItem('searchText') || '',
  };

  handleSearchTextChange = (e: ChangeEvent<HTMLInputElement>) => {
    console.log(123);

    this.setState({
      searchText: e.target.value,
    });
  };

  render() {
    return (
      <div className={classes.searchBar}>
        <Input
          type="text"
          placeholder="Type art name, artist or date..."
          className={classes.input}
          onChange={this.handleSearchTextChange}
          value={this.state.searchText}
        />
        <Button onClick={() => this.props.action(this.state.searchText)}>
          Search
        </Button>
      </div>
    );
  }
}

export default MSearchBar;
