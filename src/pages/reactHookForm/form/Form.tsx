import classes from './style.module.scss';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import { TextfullInput } from '../../../components/1-atoms/inputs/Inputs';
import Button from '../../../components/1-atoms/button/Button';

interface IFormInput {
  name: string;
  age: number;
}

const schema = yup.object().shape({
  name: yup
    .string()
    .required('Name is a required field')
    .matches(/^\p{Lu}/u, 'First symbol should be uppercase letter'),
  age: yup
    .number()
    .transform((val, orig) => (orig == '' ? undefined : val))
    .required('Age is a required field')
    .min(0, 'Age cannot be negative'),
});

const Form: React.FC = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<IFormInput>({ resolver: yupResolver(schema), mode: 'onChange' });

  const onSubmit = (data: IFormInput) => {
    console.log(data);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className={classes.form}>
      <TextfullInput
        type={'text'}
        label={'Name'}
        required={true}
        placeholder={'Type your Name'}
        error={errors.name}
        {...register('name')}
      />
      <TextfullInput
        type={'number'}
        label={'Age'}
        required={true}
        placeholder={'Type your age'}
        error={errors.age}
        {...register('age')}
      />
      <br />
      <Button type="submit">Submit</Button>
    </form>
  );
};

export default Form;
