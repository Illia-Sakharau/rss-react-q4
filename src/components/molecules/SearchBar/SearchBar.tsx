import Button from '../../atoms/button/Button';
import Input from '../../atoms/input/Input';
import classes from './style.module.scss';
import { ChangeEvent, FC, ReactElement, useState } from 'react';

type Props = {
  action: (text: string) => void;
};

const MSearchBar: FC<Props> = (props): ReactElement => {
  const [searchText, setSearchText] = useState<string>(
    localStorage.getItem('searchText') || ''
  );

  const handleSearchTextChange = (e: ChangeEvent<HTMLInputElement>) => {
    setSearchText(e.target.value);
  };

  return (
    <div className={classes.searchBar}>
      <Input
        type="text"
        placeholder="Type art name, artist or date..."
        className={classes.input}
        onChange={handleSearchTextChange}
        value={searchText}
      />
      <Button onClick={() => props.action(searchText)}>Search</Button>
    </div>
  );
};

export default MSearchBar;
