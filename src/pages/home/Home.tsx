import { PageHeader } from '../../components/1-atoms/headers/Headers';
import SectionWrapper from '../../components/1-atoms/sectionWrapper/sectionWrapper';
import { useAppSelector } from '../../hooks/redux';
import classes from './style.module.scss';
import { FC, ReactElement } from 'react';

type Props = unknown;

const Home: FC<Props> = (): ReactElement => {
  const manuallyFormData = useAppSelector((state) => state.ManuallyFormSlice);
  const reactHookFormData = useAppSelector((state) => state.ReactHookFormSlice);

  const arr1 = [];
  for (const [key, value] of Object.entries(manuallyFormData)) {
    arr1.push([key, value]);
  }
  const arr2 = [];
  for (const [key, value] of Object.entries(reactHookFormData)) {
    arr2.push([key, value]);
  }

  console.log(arr1);

  return (
    <main className={classes.page}>
      <PageHeader title={'Home Page'} className={classes.header} />
      <SectionWrapper>
        <div>
          {arr1.map((value) => (
            <div key={`manuallyFormData${value[0]}`}>
              <span>{`${value[0]}: `}</span>
              <span>{`${value[1]}`}</span>
            </div>
          ))}
          <br />
          {arr2.map((value) => (
            <div key={`manuallyFormData${value[0]}`}>
              <span>{`${value[0]}: `}</span>
              <span>{value[1] || 'no data'}</span>
            </div>
          ))}
        </div>
      </SectionWrapper>
    </main>
  );
};

export default Home;
