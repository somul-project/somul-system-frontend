type ValidState = -1 | 0 | 1 | 2 | 3;

export interface IRegisterUserValidateState {
  nameValidStatus?: ValidState;
  emailValidStatus?: ValidState;
  phoneNumberValidStatus?: ValidState;
  passwordValidStatus?: ValidState;
}
