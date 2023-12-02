import classes from './style.module.scss';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import { TextfullInput } from '../../../components/1-atoms/inputs/Inputs';
import Button from '../../../components/1-atoms/button/Button';
import { useAppDispatch } from '../../../hooks/redux';
import { formsSubmissionsSlice } from '../../../store/reducers/FormsSubmissionsSlice';
import { useNavigate } from 'react-router-dom';
import Autocomplete from '../../../components/1-atoms/autocomplete/autocomplete';
import { Gender } from '../../../types';

const GENDERS_OPTIONS = ['male', 'female', 'other'];
const COUNTRIES_OPTIONS = [
  'Afghanistan',
  'Åland Islands',
  'Albania',
  'Algeria',
  'American Samoa',
  'AndorrA',
  'Angola',
  'Anguilla',
  'Antarctica',
  'Antigua and Barbuda',
  'Argentina',
  'Armenia',
  'Aruba',
  'Australia',
  'Austria',
  'Azerbaijan',
  'Bahamas',
  'Bahrain',
  'Bangladesh',
  'Barbados',
  'Belarus',
  'Belgium',
  'Belize',
  'Benin',
  'Bermuda',
  'Bhutan',
  'Bolivia',
  'Bosnia and Herzegovina',
  'Botswana',
  'Bouvet Island',
  'Brazil',
  'British Indian Ocean Territory',
  'Brunei Darussalam',
  'Bulgaria',
  'Burkina Faso',
  'Burundi',
  'Cambodia',
  'Cameroon',
  'Canada',
  'Cape Verde',
  'Cayman Islands',
  'Central African Republic',
  'Chad',
  'Chile',
  'China',
  'Christmas Island',
  'Cocos (Keeling) Islands',
  'Colombia',
  'Comoros',
  'Congo',
  'Congo, The Democratic Republic of the',
  'Cook Islands',
  'Costa Rica',
  'Cote D Ivoire',
  'Croatia',
  'Cuba',
  'Cyprus',
  'Czech Republic',
  'Denmark',
  'Djibouti',
  'Dominica',
  'Dominican Republic',
  'Ecuador',
  'Egypt',
  'El Salvador',
  'Equatorial Guinea',
  'Eritrea',
  'Estonia',
  'Ethiopia',
  'Falkland Islands (Malvinas)',
  'Faroe Islands',
  'Fiji',
  'Finland',
  'France',
  'French Guiana',
  'French Polynesia',
  'French Southern Territories',
  'Gabon',
  'Gambia',
  'Georgia',
  'Germany',
  'Ghana',
  'Gibraltar',
  'Greece',
  'Greenland',
  'Grenada',
  'Guadeloupe',
  'Guam',
  'Guatemala',
  'Guernsey',
  'Guinea',
  'Guinea-Bissau',
  'Guyana',
  'Haiti',
  'Heard Island and Mcdonald Islands',
  'Holy See (Vatican City State)',
  'Honduras',
  'Hong Kong',
  'Hungary',
  'Iceland',
  'India',
  'Indonesia',
  'Iran, Islamic Republic Of',
  'Iraq',
  'Ireland',
  'Isle of Man',
  'Israel',
  'Italy',
  'Jamaica',
  'Japan',
  'Jersey',
  'Jordan',
  'Kazakhstan',
  'Kenya',
  'Kiribati',
  'Korea, Democratic People Republic of',
  'Korea, Republic of',
  'Kuwait',
  'Kyrgyzstan',
  'Lao People Democratic Republic',
  'Latvia',
  'Lebanon',
  'Lesotho',
  'Liberia',
  'Libyan Arab Jamahiriya',
  'Liechtenstein',
  'Lithuania',
  'Luxembourg',
  'Macao',
  'Macedonia, The Former Yugoslav Republic of',
  'Madagascar',
  'Malawi',
  'Malaysia',
  'Maldives',
  'Mali',
  'Malta',
  'Marshall Islands',
  'Martinique',
  'Mauritania',
  'Mauritius',
  'Mayotte',
  'Mexico',
  'Micronesia, Federated States of',
  'Moldova, Republic of',
  'Monaco',
  'Mongolia',
  'Montserrat',
  'Morocco',
  'Mozambique',
  'Myanmar',
  'Namibia',
  'Nauru',
  'Nepal',
  'Netherlands',
  'Netherlands Antilles',
  'New Caledonia',
  'New Zealand',
  'Nicaragua',
  'Niger',
  'Nigeria',
  'Niue',
  'Norfolk Island',
  'Northern Mariana Islands',
  'Norway',
  'Oman',
  'Pakistan',
  'Palau',
  'Palestinian Territory, Occupied',
  'Panama',
  'Papua New Guinea',
  'Paraguay',
  'Peru',
  'Philippines',
  'Pitcairn',
  'Poland',
  'Portugal',
  'Puerto Rico',
  'Qatar',
  'Reunion',
  'Romania',
  'Russian Federation',
  'RWANDA',
  'Saint Helena',
  'Saint Kitts and Nevis',
  'Saint Lucia',
  'Saint Pierre and Miquelon',
  'Saint Vincent and the Grenadines',
  'Samoa',
  'San Marino',
  'Sao Tome and Principe',
  'Saudi Arabia',
  'Senegal',
  'Serbia and Montenegro',
  'Seychelles',
  'Sierra Leone',
  'Singapore',
  'Slovakia',
  'Slovenia',
  'Solomon Islands',
  'Somalia',
  'South Africa',
  'South Georgia and the South Sandwich Islands',
  'Spain',
  'Sri Lanka',
  'Sudan',
  'Suriname',
  'Svalbard and Jan Mayen',
  'Swaziland',
  'Sweden',
  'Switzerland',
  'Syrian Arab Republic',
  'Taiwan, Province of China',
  'Tajikistan',
  'Tanzania, United Republic of',
  'Thailand',
  'Timor-Leste',
  'Togo',
  'Tokelau',
  'Tonga',
  'Trinidad and Tobago',
  'Tunisia',
  'Turkey',
  'Turkmenistan',
  'Turks and Caicos Islands',
  'Tuvalu',
  'Uganda',
  'Ukraine',
  'United Arab Emirates',
  'United Kingdom',
  'United States',
  'United States Minor Outlying Islands',
  'Uruguay',
  'Uzbekistan',
  'Vanuatu',
  'Venezuela',
  'Viet Nam',
  'Virgin Islands, British',
  'Virgin Islands, U.S.',
  'Wallis and Futuna',
  'Western Sahara',
  'Yemen',
  'Zambia',
  'Zimbabwe',
];

interface IFormInput {
  name: string;
  age: number;
  email: string;
  password: string;
  confirmPassword: string;
  gender: string;
  country: string;
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
    .required('Gender is a required field')
    .matches(
      new RegExp(`^(${COUNTRIES_OPTIONS.join('|')})$`),
      'Choose from following options'
    ),
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
          gender: data.gender as Gender,
          termsAndConditions: false,
          picture: null,
          country: data.country,
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
      <Autocomplete
        options={GENDERS_OPTIONS}
        label={'Gender'}
        required={true}
        placeholder={'Choose your gender'}
        error={errors.gender}
        {...register('gender')}
      />
      <Autocomplete
        options={COUNTRIES_OPTIONS}
        label={'Country'}
        required={true}
        placeholder={'Choose your country'}
        error={errors.country}
        {...register('country')}
      />
      <br />
      <Button type="submit">Submit</Button>
    </form>
  );
};

export default Form;
