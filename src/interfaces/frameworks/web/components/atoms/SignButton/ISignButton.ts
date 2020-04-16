export type SignButtonType = 'signin' | 'signup';
export type SignButtonCiteType = 'google' | 'github' | 'email';

export interface ISignButton {
  onClick: () => void
  buttonType: SignButtonType
  citeType: SignButtonCiteType
}

export interface ISignButtonElement {
  citeType: SignButtonCiteType
}
