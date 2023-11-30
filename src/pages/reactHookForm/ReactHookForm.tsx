import classes from './style.module.scss';
import { FC, ReactElement } from 'react';
import FormSection from '../../components/3-organisms/formSection/formSection';

type Props = unknown;

const ManuallyForm: FC<Props> = (): ReactElement => {
  return (
    <main className={classes.page}>
      <FormSection title={'Form 2'} subtitle={'React Hook Form'} />
    </main>
  );
};

export default ManuallyForm;
