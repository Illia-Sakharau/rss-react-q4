// import classes from './style.module.scss';
import classes from './style.module.scss';
import { FC, ReactElement } from 'react';
import SectionWrapper from '../../1-atoms/sectionWrapper/sectionWrapper';
import { SectionHeader } from '../../1-atoms/headers/Headers';

type Props = {
  title: string;
  subtitle: string;
};

const FormSection: FC<Props> = ({ title, subtitle }): ReactElement => {
  return (
    <SectionWrapper className={classes.wrapper}>
      <div className={classes['side_form']}>
        <SectionHeader title={title} subtitle={subtitle} />
        <div>FORM</div>
      </div>
      <div className={classes['side_image']}>
        <div className={classes['side_image__image']} />
      </div>
    </SectionWrapper>
  );
};

export default FormSection;
