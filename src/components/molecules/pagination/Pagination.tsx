import Button from '../../atoms/button/Button';
import Select from '../../atoms/select/Select';
import classes from './style.module.scss';
import { FC, ReactElement } from 'react';

type Props = {
  currentPage: number;
  totalPages: number;
  itemsOnPage: string;
  onChange: React.Dispatch<React.SetStateAction<string>>;
  defaultText?: string;
  className?: string;
};

const Pagination: FC<Props> = (props): ReactElement => {
  const className = props.className
    ? classes.pagination + ' ' + props.className
    : classes.pagination;

  const maxPage = Math.min(props.totalPages, 900 / +props.itemsOnPage);

  return (
    <div className={className} data-testid="pagination">
      <Button
        onClick={() => props.onChange('1')}
        disabled={props.currentPage === 1}
      >
        {`<<`}
      </Button>
      <Button
        onClick={() => props.onChange(`${props.currentPage - 1}`)}
        disabled={props.currentPage === 1}
      >
        {`<`}
      </Button>
      <Select
        className={classes.select}
        options={formPaginationOptions(maxPage)}
        defaultText={props.defaultText}
        value={`${props.currentPage}`}
        onChange={props.onChange}
      />
      <Button
        onClick={() => props.onChange(`${props.currentPage + 1}`)}
        disabled={props.currentPage === maxPage}
      >
        {`>`}
      </Button>
      <Button
        onClick={() => props.onChange(`${maxPage}`)}
        disabled={props.currentPage === maxPage}
      >
        {`>>`}
      </Button>
    </div>
  );
};

type options = {
  value: string;
  text: string;
}[];

function formPaginationOptions(totalPages: number): options {
  const options = [] as options;
  for (let i = 1; i <= totalPages; i++) {
    options.push({ value: `${i}`, text: `Page ${i}` });
  }
  return options;
}

export default Pagination;
