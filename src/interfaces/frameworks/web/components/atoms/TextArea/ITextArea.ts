export interface ITextArea {
  defaultLabel: string;
  onValueChange: (value: string) => void;
  readOnly?: boolean;
  height?: number;
  style?: object;
  maxLength?: number;
  customRef?: (instance: HTMLTextAreaElement | null) => void;
}

export interface ITextAreaElement {
  isFocus: boolean;
  readOnly?: boolean;
  height?: number;
}
