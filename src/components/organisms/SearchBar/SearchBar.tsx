import SectionWrapper from '../../atoms/sectionWrapper/sectionWrapper';
import MSearchBar from '../../molecules/SearchBar/SearchBar';
import classes from './style.module.scss';
import { Component } from 'react';

type Props = {
  action: (text: string) => void;
};
type State = unknown;

class SearchBar extends Component<Props, State> {
  render() {
    return (
      <div className={classes.searchBar}>
        <SectionWrapper className={classes.searchBarWrapper}>
          <MSearchBar action={this.props.action} />
        </SectionWrapper>
      </div>
    );
  }
}

export default SearchBar;
