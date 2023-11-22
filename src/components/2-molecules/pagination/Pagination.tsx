import Button from '../../1-atoms/button/Button';
import Select from '../../1-atoms/select/Select';
import classes from './style.module.scss';
import { FC, ReactElement } from 'react';

type Props = {
  currentPage: number;
  totalPages: number;
  onChange: (nextPage: string) => void;
  defaultText?: string;
  className?: string;
};

const Pagination: FC<Props> = (props): ReactElement => {
  const className = props.className
    ? classes.pagination + ' ' + props.className
    : classes.pagination;

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
        options={formPaginationOptions(props.totalPages)}
        defaultText={props.defaultText}
        value={`${props.currentPage}`}
        onChange={props.onChange}
      />
      <Button
        onClick={() => props.onChange(`${props.currentPage + 1}`)}
        disabled={props.currentPage === props.totalPages}
      >
        {`>`}
      </Button>
      <Button
        onClick={() => props.onChange(`${props.totalPages}`)}
        disabled={props.currentPage === props.totalPages}
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
