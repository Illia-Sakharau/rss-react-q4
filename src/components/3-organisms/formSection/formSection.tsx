import classes from './style.module.scss';
import { FC, ReactElement } from 'react';
import SectionWrapper from '../../1-atoms/sectionWrapper/sectionWrapper';
import { SectionHeader } from '../../1-atoms/headers/Headers';
import ImgForm1 from '../../../assets/img-form-1.jpg';
import ImgForm2 from '../../../assets/img-form-2.jpg';

type Props = {
  title: string;
  subtitle: string;
  formEl: ReactElement;
};

const FormSection: FC<Props> = ({ title, subtitle, formEl }): ReactElement => {
  return (
    <SectionWrapper className={classes.wrapper}>
      <div className={classes['side_form']}>
        <SectionHeader title={title} subtitle={subtitle} />
        {formEl}
      </div>
      <div className={classes['side_image']}>
        <img
          src={title === 'Form 1' ? ImgForm1 : ImgForm2}
          alt="just abstract image"
          className={classes['side_image__image']}
        />
      </div>
    </SectionWrapper>
  );
};

export default FormSection;
