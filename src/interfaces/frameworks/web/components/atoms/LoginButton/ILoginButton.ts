export type LoginButtonType = 'google' | 'github';

export interface ILoginButton {
  onClick: () => void
  type?: LoginButtonType
}
