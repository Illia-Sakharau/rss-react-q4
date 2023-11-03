import classes from './style.module.scss';
import { FC, ReactElement } from 'react';

type SectionProps = {
  children: string;
  className?: string;
};

export const SectionHeader: FC<SectionProps> = ({
  children,
  className,
}): ReactElement => {
  const finalClassName = className
    ? classes.sectionHeader + ' ' + className
    : classes.sectionHeader;

  return (
    <div className={finalClassName}>
      <h3>{children}</h3>
    </div>
  );
};
