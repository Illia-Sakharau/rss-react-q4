import classes from './style.module.scss';
import { FieldError, useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import Input from '../../../components/1-atoms/inputs/Inputs';
import Button from '../../../components/1-atoms/button/Button';
import { useAppDispatch, useAppSelector } from '../../../hooks/redux';
import { formsSubmissionsSlice } from '../../../store/reducers/FormsSubmissionsSlice';
import { useNavigate } from 'react-router-dom';
import Autocomplete from '../../../components/1-atoms/autocomplete/autocomplete';
import { Gender, IFormInput } from '../../../types';
import { GENDERS_OPTIONS } from '../../../constants';
import Checkbox from '../../../components/1-atoms/checkbox/checkbox';
import Password from '../../../components/1-atoms/password/password';
import schema from '../../../validation';

const Form: React.FC = () => {
  const dispath = useAppDispatch();
  const { setSubmitInfo, setSubmitRedirect } = formsSubmissionsSlice.actions;
  const { countries } = useAppSelector((state) => state.CountriesSlice);
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { errors, isValid },
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
    <form onSubmit={handleSubmit(onSubmit)} className={classes.form} noValidate>
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
      <Password
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
        options={countries}
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
      <Button type="submit" disabled={!isValid}>
        Submit
      </Button>
    </form>
  );
};

export default Form;
