type ButtonType = 'default' | 'field' | 'small' | 'wide' | 'mobilewide';

export interface IBaseButton {
  isDisable: boolean;
  bgColor: string;
  hoverColor: string;
}

export interface IButton {
  isPrimary?: boolean;
  isDisable?: boolean;
  type?: ButtonType;
  label: string;
  onClick?: Function;
  style?: object;
}
