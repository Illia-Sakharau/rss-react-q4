import classes from './style.module.scss';
import { FC, ReactElement } from 'react';

type SectionProps = {
  children: string;
  additionalElems?: ReactElement;
  className?: string;
};

export const SectionHeader: FC<SectionProps> = ({
  children,
  className,
  additionalElems,
}): ReactElement => {
  const finalClassName = className
    ? classes.sectionHeader + ' ' + className
    : classes.sectionHeader;

  return (
    <div className={finalClassName} data-testid="section-header-wrapper">
      <h3>{children}</h3>
      {!!additionalElems && additionalElems}
    </div>
  );
};
