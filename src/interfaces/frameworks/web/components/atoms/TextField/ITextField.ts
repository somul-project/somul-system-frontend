export interface ITextField {
  defaultLabel: string
  onValueChange?: (value?: string) => void
}

export interface ITextFieldElement {
  isFocus: boolean
}
