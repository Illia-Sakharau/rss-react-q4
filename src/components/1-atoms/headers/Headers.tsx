import SectionWrapper from '../sectionWrapper/sectionWrapper';
import classes from './style.module.scss';
import { FC, ReactElement } from 'react';

type HeadesProps = {
  title: string;
  subtitle?: string;
  className?: string;
};

export const PageHeader: FC<HeadesProps> = ({
  title,
  subtitle,
  className,
}): ReactElement => {
  const finalClassName = className
    ? classes['page-header'] + ' ' + className
    : classes['page-header'];

  return (
    <SectionWrapper className={finalClassName}>
      <h2>{title}</h2>
      {!!subtitle && <span>{subtitle}</span>}
    </SectionWrapper>
  );
};

export const SectionHeader: FC<HeadesProps> = ({
  title,
  subtitle,
  className,
}): ReactElement => {
  const finalClassName = className
    ? classes['section-header'] + ' ' + className
    : classes['section-header'];

  return (
    <div className={finalClassName}>
      <h3>{title}</h3>
      {!!subtitle && <span>{subtitle}</span>}
    </div>
  );
};
