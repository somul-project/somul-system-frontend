type textfieldType = 'text' | 'password';

export interface ITextField {
  type?: textfieldType
  defaultLabel: string
  onValueChange: (value: string) => void
  style?: object
  readOnly?: boolean
  value?: string
  isButton?: boolean
  buttonSrc?: string
  onButtonClicked?: Function
  customRef?: (instance: HTMLInputElement | null) => void
}

export interface ITextFieldElement {
  isFocus: boolean
  style?: object
}
