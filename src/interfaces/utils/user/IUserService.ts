export interface ISignUpData {
  name: string;
  email: string;
  phone: string;
  password: string;
  rePassword: string;
  isPrivacyChecked: boolean;
}

export interface IServerResponse {
  statusCode: string;
  errorMessage: string;
}

export interface ISignInData {
  email: string;
  password: string;
}
