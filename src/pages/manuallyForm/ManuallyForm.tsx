import FormSection from '../../components/3-organisms/formSection/formSection';
import Form from './form/Form';
import classes from './style.module.scss';
import { FC, ReactElement } from 'react';

type Props = unknown;

const ManuallyForm: FC<Props> = (): ReactElement => {
  return (
    <main className={classes.page}>
      <FormSection
        title={'Form 1'}
        subtitle={'Manually Form'}
        formEl={<Form />}
      />
    </main>
  );
};

export default ManuallyForm;
