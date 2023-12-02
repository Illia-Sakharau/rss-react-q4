import classes from './style.module.scss';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import { TextfullInput } from '../../../components/1-atoms/inputs/Inputs';
import Button from '../../../components/1-atoms/button/Button';
import { useAppDispatch } from '../../../hooks/redux';
import { formsSubmissionsSlice } from '../../../store/reducers/FormsSubmissionsSlice';
import { useNavigate } from 'react-router-dom';

interface IFormInput {
  name: string;
  age: number;
  email: string;
  password: string;
  confirmPassword: string;
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
  email: yup
    .string()
    .required('Email is a required field')
    .email('Invalid email address'),
  password: yup
    .string()
    .required('Password is a required field')
    .matches(/(?=.*\d)/, 'Password should contain at least one number')
    .matches(
      /(?=.*\p{Lu})/u,
      'Password should contain at least one uppercased letter'
    )
    .matches(
      /(?=.*\p{Ll})/u,
      'Password should contain at least one lowercased letter'
    )
    .matches(
      /(?=.*[\W_])/,
      'Password should contain at least one special character'
    ),
  confirmPassword: yup
    .string()
    .required('Please re-type your password')
    .oneOf([yup.ref('password')], 'Passwords does not match'),
});

const Form: React.FC = () => {
  const dispath = useAppDispatch();
  const { setSubmitInfo, setSubmitRedirect } = formsSubmissionsSlice.actions;
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<IFormInput>({ resolver: yupResolver(schema), mode: 'onChange' });

  const onSubmit = (data: IFormInput) => {
    dispath(
      setSubmitInfo({
        id: '',
        info: {
          title: 'Form 2',
          subtitle: 'React Hook Form',
        },
        data: {
          name: data.name,
          age: data.age,
          email: data.email,
          password: data.password,
          gender: null,
          termsAndConditions: false,
          picture: null,
          country: null,
        },
      })
    );
    setTimeout(() => dispath(setSubmitRedirect(false)), 1500);

    navigate('/');
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
      <TextfullInput
        type={'email'}
        label={'Email'}
        required={true}
        placeholder={'Type your email'}
        error={errors.email}
        {...register('email')}
      />
      <TextfullInput
        type={'password'}
        label={'Password'}
        required={true}
        placeholder={'Type new password'}
        error={errors.password}
        {...register('password')}
      />
      <TextfullInput
        type={'password'}
        label={'Confirm Password'}
        required={true}
        placeholder={'Re-type new password'}
        error={errors.confirmPassword}
        {...register('confirmPassword')}
      />
      <br />
      <Button type="submit">Submit</Button>
    </form>
  );
};

export default Form;
