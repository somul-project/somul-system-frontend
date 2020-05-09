export type SignButtonType = 'signin' | 'signup';
export type SignButtonSiteType = 'google' | 'github' | 'email';

export interface ISignButton {
  onClick: () => void;
  buttonType: SignButtonType;
  siteType: SignButtonSiteType;
}

export interface ISignButtonElement {
  siteType: SignButtonSiteType;
}
