type textfieldType = 'text' | 'password';

export interface ITextField {
  type?: textfieldType;
  defaultLabel: string;
  onValueChange?: (value: string) => void;
  onFocusChanged?: (value: boolean) => void;
  style?: object;
  readOnly?: boolean;
  value?: string;
  isButton?: boolean;
  isError?: boolean;
  buttonSrc?: string;
  onButtonClicked?: Function;
  optionalString?: string | undefined;
  customRef?: (instance: HTMLInputElement | null) => void;
  maxLength?: number;
}

export interface ITextFieldElement {
  isFocus: boolean;
  isError?: boolean;
  style?: object;
}

export interface IOptionalLabelElement {
  isError: boolean;
}
