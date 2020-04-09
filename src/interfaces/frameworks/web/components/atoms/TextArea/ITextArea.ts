export interface ITextArea {
  defaultLabel: string
  onValueChange: (value: string) => void
  readOnly?: boolean
}

export interface ITextAreaElement {
  isFocus: boolean
  readOnly?: boolean
}
