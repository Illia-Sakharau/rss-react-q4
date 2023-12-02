import classes from './style.module.scss';
import { FC, ReactElement } from 'react';
import { ISubmitInfo } from '../../../types';
import { SectionHeader } from '../../1-atoms/headers/Headers';

type Props = {
  submitInfo: ISubmitInfo;
  last: boolean;
};

const Tile: FC<Props> = ({ submitInfo, last }): ReactElement => {
  const { id, info, data } = submitInfo;
  const finalClassName = last
    ? classes.tile + ' ' + classes.last
    : classes.tile;

  return (
    <div className={finalClassName}>
      <SectionHeader title={info.title} subtitle={info.subtitle} />
      <br />
      {Object.entries(data).map((item) => {
        const key = `${id}${item[0]}`;
        const title = item[0][0].toUpperCase() + item[0].slice(1);
        const value = item[1] === null ? '---' : `${item[1]}`;

        return (
          <div className={classes.item} key={key}>
            <h6 className={classes.title}>{title}</h6>
            <span className={classes.value}>{value}</span>
          </div>
        );
      })}
    </div>
  );
};

export default Tile;
