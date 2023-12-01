export type linkInfo = {
  to: string;
  text: string;
};

export type Gender = 'male' | 'female' | 'other';

export interface IFormData {
  name: string;
  age: number;
  email: string;
  password: string;
  gender: Gender | null;
  termsAndConditions: boolean;
  picture: string | null;
  country: string | null;
}

export interface IFormInfo {
  title: string;
  subtitle: string;
}

export interface ISubmitInfo {
  id: string;
  info: IFormInfo;
  data: IFormData;
}
