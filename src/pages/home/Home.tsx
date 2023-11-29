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
    <div className={classes.page}>
      <h2>Home Page</h2>
      <div>
        {arr1.map((value) => (
          <div key={`manuallyFormData${value[0]}`}>
            <span>{`${value[0]}: `}</span>
            <span>{value[1] || 'no data'}</span>
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
    </div>
  );
};

export default Home;
