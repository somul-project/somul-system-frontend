export type LoginButtonType = 'google' | 'github';

export interface ILoginButton {
  onClick: any
  type?: LoginButtonType
}
