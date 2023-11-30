import {
  PageHeader,
  SectionHeader,
} from '../../components/1-atoms/headers/Headers';
import SectionWrapper from '../../components/1-atoms/sectionWrapper/sectionWrapper';
import { FC, ReactElement } from 'react';

type Props = unknown;

const ManuallyForm: FC<Props> = (): ReactElement => {
  return (
    <main>
      <PageHeader title="Form 1" subtitle="Manually Form" />
      <SectionWrapper>
        <SectionHeader title="Form inputs" subtitle="Manually Form" />
      </SectionWrapper>
    </main>
  );
};

export default ManuallyForm;
