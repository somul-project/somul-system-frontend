type textfieldType = 'text' | 'password';

export interface ITextField {
  type?: textfieldType
  defaultLabel: string
  onValueChange: (value: string) => void
  style?: object
}

export interface ITextFieldElement {
  isFocus: boolean
  style?: object
}
