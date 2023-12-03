import classes from './style.module.scss';
import Input from '../../../components/1-atoms/inputs/Inputs';
import Button from '../../../components/1-atoms/button/Button';
import Autocomplete from '../../../components/1-atoms/autocomplete/autocomplete';
import { COUNTRIES_OPTIONS, GENDERS_OPTIONS } from '../../../constants';
import Checkbox from '../../../components/1-atoms/checkbox/checkbox';
import Password from '../../../components/1-atoms/password/password';
import { FormEvent, useRef, useState } from 'react';
import { ValidationError } from 'yup';
import schema from '../../../validation';
import { useAppDispatch } from '../../../hooks/redux';
import { formsSubmissionsSlice } from '../../../store/reducers/FormsSubmissionsSlice';
import { useNavigate } from 'react-router-dom';
import { Gender } from '../../../types';

const Form: React.FC = () => {
  const dispath = useAppDispatch();
  const { setSubmitInfo, setSubmitRedirect } = formsSubmissionsSlice.actions;
  const navigate = useNavigate();
  const [errors, setErrors] = useState<{
    [index: string]: ValidationError | undefined;
  }>({});

  const nameInput = useRef<HTMLInputElement>(null);
  const ageInput = useRef<HTMLInputElement>(null);
  const emailInput = useRef<HTMLInputElement>(null);
  const passwordInput = useRef<HTMLInputElement>(null);
  const confirmPasswordInput = useRef<HTMLInputElement>(null);
  const genderInput = useRef<HTMLInputElement>(null);
  const countryInput = useRef<HTMLInputElement>(null);
  const pictureInput = useRef<HTMLInputElement>(null);
  const termsInput = useRef<HTMLInputElement>(null);

  const onSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const newErrors: { [index: string]: ValidationError } = {};
    const reader = new FileReader();

    await schema
      .validate(
        {
          name: nameInput.current?.value,
          age: ageInput.current?.value,
          email: emailInput.current?.value,
          password: passwordInput.current?.value,
          confirmPassword: confirmPasswordInput.current?.value,
          gender: genderInput.current?.value,
          country: countryInput.current?.value,
          picture: pictureInput.current?.files,
          terms: termsInput.current?.checked,
        },
        {
          abortEarly: false,
        }
      )
      .catch((err: ValidationError) => {
        err.inner.forEach((error) => {
          const name = error.path as string;
          if (!newErrors[name]) {
            newErrors[name] = error;
          }
        });
        setErrors(newErrors);
      });

    if (Object.keys(newErrors).length === 0 && pictureInput.current?.files) {
      reader.readAsDataURL(pictureInput.current?.files[0]);

      reader.onloadend = function () {
        dispath(
          setSubmitInfo({
            id: `${Date.now()}`,
            info: {
              title: 'Form 1',
              subtitle: 'Manually Form',
            },
            data: {
              name: `${nameInput.current?.value}`,
              age: +`${ageInput.current?.value}`,
              email: `${emailInput.current?.value}`,
              password: `${passwordInput.current?.value}`,
              gender: genderInput.current?.value as Gender,
              termsAndConditions: !!termsInput.current?.checked,
              country: `${countryInput.current?.value}`,
              picture: reader.result as string,
            },
          })
        );
        setTimeout(() => dispath(setSubmitRedirect(false)), 1500);

        navigate('/');
      };
    }
  };

  return (
    <form onSubmit={onSubmit} className={classes.form} noValidate>
      <Input
        type={'text'}
        label={'Name'}
        required
        placeholder={'Type your Name'}
        name={'Name'}
        onChange={() => {
          const errorsMod = errors;
          delete errorsMod.name;
          setErrors({ ...errorsMod });
        }}
        error={errors.name}
        ref={nameInput}
      />
      <Input
        type={'number'}
        label={'Age'}
        required
        placeholder={'Type your age'}
        onChange={() => {
          setErrors({ ...errors, age: undefined });
        }}
        error={errors.age}
        ref={ageInput}
      />
      <Input
        type={'email'}
        label={'Email'}
        required
        placeholder={'Type your email'}
        onChange={() => {
          setErrors({ ...errors, email: undefined });
        }}
        error={errors.email}
        ref={emailInput}
      />
      <Password
        label={'Password'}
        required
        placeholder={'Type new password'}
        onChange={() => {
          setErrors({ ...errors, password: undefined });
        }}
        error={errors.password}
        ref={passwordInput}
      />
      <Input
        type={'password'}
        label={'Confirm Password'}
        required
        placeholder={'Re-type new password'}
        onChange={() => {
          setErrors({ ...errors, confirmPassword: undefined });
        }}
        error={errors.confirmPassword}
        ref={confirmPasswordInput}
      />
      <Autocomplete
        options={GENDERS_OPTIONS}
        label={'Gender'}
        name={'gender'}
        required
        placeholder={'Choose your gender'}
        onChange={() => {
          setErrors({ ...errors, gender: undefined });
        }}
        error={errors.gender}
        ref={genderInput}
      />
      <Autocomplete
        options={COUNTRIES_OPTIONS}
        label={'Country'}
        name={'country'}
        required
        placeholder={'Choose your country'}
        onChange={() => {
          setErrors({ ...errors, country: undefined });
        }}
        error={errors.country}
        ref={countryInput}
      />

      <Input
        type={'file'}
        label={'Upload .jpeg or .png image (max 1 Mb)'}
        required
        onChange={() => {
          setErrors({ ...errors, picture: undefined });
        }}
        error={errors.picture}
        ref={pictureInput}
      />

      <Checkbox
        label={'Accept terms and conditions'}
        required
        onChange={() => {
          setErrors({ ...errors, terms: undefined });
        }}
        error={errors.terms}
        ref={termsInput}
      />

      <br />
      <Button type="submit">Submit</Button>
    </form>
  );
};

export default Form;
