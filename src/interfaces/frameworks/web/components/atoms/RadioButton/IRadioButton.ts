export type edgeType = 'left' | 'none' | 'right';

export interface IRadioButtonContainer {
  edge: edgeType
}

export interface IRadioButton {
  edge: edgeType
  label: string
  id: string
  name: string
  value: string
  onRadioClick: (data: string) => void
}
