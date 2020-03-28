export interface ITextArea {
  defaultLabel: string
  onValueChange?: (value?: string) => void
}

export interface ITextAreaElement {
  isFocus: boolean
}
