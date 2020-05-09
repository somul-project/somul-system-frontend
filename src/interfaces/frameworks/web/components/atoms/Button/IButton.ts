type ButtonType = 'default' | 'field' | 'small' | 'wide' | 'mobilewide';

export interface IBaseButton {
  isPrimary?: boolean;
  isEnabled?: boolean;
  onClick?: any;
}

export interface IButton extends IBaseButton {
  type?: ButtonType;
  label: string;
  style?: object;
}
