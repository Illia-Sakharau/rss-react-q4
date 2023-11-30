import {
  PageHeader,
  SectionHeader,
} from '../../components/1-atoms/headers/Headers';
import SectionWrapper from '../../components/1-atoms/sectionWrapper/sectionWrapper';
import { FC, ReactElement } from 'react';

type Props = unknown;

const ReactHookForm: FC<Props> = (): ReactElement => {
  return (
    <main>
      <PageHeader title="Form 2" subtitle="React Hook Form" />
      <SectionWrapper>
        <SectionHeader title="Form inputs" subtitle="React Hook Form" />
      </SectionWrapper>
    </main>
  );
};

export default ReactHookForm;
