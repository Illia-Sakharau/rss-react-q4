import { NavLink } from 'react-router-dom';
import classes from './style.module.scss';
import { FC, ReactElement } from 'react';
import { IFormState } from '../../../types';
import { SectionHeader } from '../../1-atoms/headers/Headers';

type Props = {
  data: IFormState;
  linkPath: string;
  title: string;
  subtitle: string;
  className?: string;
};

const Tile: FC<Props> = ({
  data,
  linkPath,
  title,
  subtitle,
  className,
}): ReactElement => {
  const finalClassName = className
    ? classes.tile + ' ' + className
    : classes.tile;

  return (
    <NavLink to={linkPath} className={finalClassName} key={linkPath}>
      <SectionHeader title={title} subtitle={subtitle} />
      <br />
      {Object.entries(data).map((item) => {
        const key = `${linkPath}${item[0]}`;
        const title = item[0][0].toUpperCase() + item[0].slice(1);
        const value = item[1] === null ? '---' : `${item[1]}`;

        return (
          <div className={classes.item} key={key}>
            <h6 className={classes.title}>{title}</h6>
            <span className={classes.value}>{value}</span>
          </div>
        );
      })}
    </NavLink>
  );
};

export default Tile;
