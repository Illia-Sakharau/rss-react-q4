import Button from '../../atoms/button/Button';
import Input from '../../atoms/input/Input';
import classes from './style.module.scss';
import { ChangeEvent, FC, ReactElement } from 'react';

type Props = {
  action: (text: string) => void;
  searchText: string;
  setSearchText: (text: string) => void;
};

const MSearchBar: FC<Props> = (props): ReactElement => {
  const handleSearchTextChange = (e: ChangeEvent<HTMLInputElement>) => {
    props.setSearchText(e.target.value);
  };

  return (
    <div className={classes.searchBar}>
      <Input
        type="text"
        placeholder="Type art name, artist or date..."
        className={classes.input}
        onChange={handleSearchTextChange}
        value={props.searchText}
      />
      <Button onClick={() => props.action(props.searchText)}>Search</Button>
    </div>
  );
};

export default MSearchBar;
