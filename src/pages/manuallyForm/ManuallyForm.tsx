import FormSection from '../../components/3-organisms/formSection/formSection';
import classes from './style.module.scss';
import { FC, ReactElement } from 'react';

type Props = unknown;

const ManuallyForm: FC<Props> = (): ReactElement => {
  return (
    <main className={classes.page}>
      <FormSection
        title={'Form 1'}
        subtitle={'Manually Form'}
        formEl={<div>FORM__1</div>}
      />
    </main>
  );
};

export default ManuallyForm;
