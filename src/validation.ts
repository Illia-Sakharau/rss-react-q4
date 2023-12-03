import * as yup from 'yup';
import {
  COUNTRIES_OPTIONS,
  GENDERS_OPTIONS,
  SUPPORTED_FORMATS,
} from './constants';

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

export default schema;
