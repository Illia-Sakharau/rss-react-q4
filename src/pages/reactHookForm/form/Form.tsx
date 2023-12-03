import classes from './style.module.scss';
import { FieldError, useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import Input from '../../../components/1-atoms/inputs/Inputs';
import Button from '../../../components/1-atoms/button/Button';
import { useAppDispatch } from '../../../hooks/redux';
import { formsSubmissionsSlice } from '../../../store/reducers/FormsSubmissionsSlice';
import { useNavigate } from 'react-router-dom';
import Autocomplete from '../../../components/1-atoms/autocomplete/autocomplete';
import { Gender } from '../../../types';
import { COUNTRIES_OPTIONS, GENDERS_OPTIONS } from '../../../constants';
import Checkbox from '../../../components/1-atoms/checkbox/checkbox';

const SUPPORTED_FORMATS = ['image/jpeg', 'image/png'];

interface IFormInput {
  name: string;
  age: number;
  email: string;
  password: string;
  confirmPassword: string;
  gender: string;
  country: string;
  picture: [File];
  terms: boolean;
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
  gender: yup
    .string()
    .required('Gender is a required field')
    .matches(
      new RegExp(`^(${GENDERS_OPTIONS.join('|')})$`),
      'Choose from following options'
    ),
  country: yup
    .string()
    .required('Country is a required field')
    .matches(
      new RegExp(`^(${COUNTRIES_OPTIONS.join('|')})$`),
      'Choose from following options'
    ),
  picture: yup
    .mixed<[File]>()
    .required('Picture is a required')
    .test('be', 'File have not uploaded', (value: [File]) => !!value[0])
    .test(
      'format',
      'Not a valid image type (only .jpeg, .png)',
      (value: [File]) => value[0] && SUPPORTED_FORMATS.includes(value[0].type)
    )
    .test(
      'size',
      'The file is too large (max 1 Mb)',
      (value: [File]) => value[0] && value[0].size <= 1024 * 1024
    ),
  terms: yup
    .boolean()
    .required()
    .oneOf([true], 'Please accept the terms and conditions'),
});

const Form: React.FC = () => {
  const dispath = useAppDispatch();
  const { setSubmitInfo, setSubmitRedirect } = formsSubmissionsSlice.actions;
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<IFormInput>({ resolver: yupResolver(schema), mode: 'all' });

  const onSubmit = async (data: IFormInput) => {
    const reader = new FileReader();
    reader.readAsDataURL(data.picture[0]);

    reader.onloadend = function () {
      dispath(
        setSubmitInfo({
          id: `${Date.now()}`,
          info: {
            title: 'Form 2',
            subtitle: 'React Hook Form',
          },
          data: {
            name: data.name,
            age: data.age,
            email: data.email,
            password: data.password,
            gender: data.gender as Gender,
            termsAndConditions: data.terms,
            country: data.country,
            picture: reader.result as string,
          },
        })
      );
      setTimeout(() => dispath(setSubmitRedirect(false)), 1500);

      navigate('/');
    };
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className={classes.form}>
      <Input
        type={'text'}
        label={'Name'}
        required
        placeholder={'Type your Name'}
        error={errors.name}
        {...register('name')}
      />
      <Input
        type={'number'}
        label={'Age'}
        required
        placeholder={'Type your age'}
        error={errors.age}
        {...register('age')}
      />
      <Input
        type={'email'}
        label={'Email'}
        required
        placeholder={'Type your email'}
        error={errors.email}
        {...register('email')}
      />
      <Input
        type={'password'}
        label={'Password'}
        required
        placeholder={'Type new password'}
        error={errors.password}
        {...register('password')}
      />
      <Input
        type={'password'}
        label={'Confirm Password'}
        required
        placeholder={'Re-type new password'}
        error={errors.confirmPassword}
        {...register('confirmPassword')}
      />
      <Autocomplete
        options={GENDERS_OPTIONS}
        label={'Gender'}
        required
        placeholder={'Choose your gender'}
        error={errors.gender}
        {...register('gender')}
      />
      <Autocomplete
        options={COUNTRIES_OPTIONS}
        label={'Country'}
        required
        placeholder={'Choose your country'}
        error={errors.country}
        {...register('country')}
      />

      <Input
        type={'file'}
        label={'Upload .jpeg or .png image (max 1 Mb)'}
        required
        error={errors.picture as FieldError}
        {...register('picture')}
      />

      <Checkbox
        label={'Accept terms and conditions'}
        required
        error={errors.terms}
        {...register('terms')}
      />

      <br />
      <Button type="submit">Submit</Button>
    </form>
  );
};

export default Form;
