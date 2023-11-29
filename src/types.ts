export type linkInfo = {
  to: string;
  text: string;
};

export type Gender = 'male' | 'female' | 'other';

export interface IFormState {
  name: string | null;
  age: number | null;
  email: string | null;
  password: string | null;
  gender: Gender | null;
  termsAndConditions: boolean;
  picture: string | null;
  country: string | null;
}
