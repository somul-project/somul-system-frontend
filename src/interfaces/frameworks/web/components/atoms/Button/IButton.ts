type ButtonType = 'default' | 'field' | 'small' | 'wide' | 'mobilewide';

export interface IBaseButton {
  isEnabled?: boolean;
  bgColor: string;
  hoverColor: string;
}

export interface IButton {
  isPrimary?: boolean;
  isEnabled?: boolean;
  type?: ButtonType;
  label: string;
  onClick?: Function;
  style?: object;
}
