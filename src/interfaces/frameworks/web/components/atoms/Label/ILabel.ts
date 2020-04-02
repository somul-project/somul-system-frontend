type labelType = 'H1' | 'H2' | 'H3' | 'H4' | 'H5' | 'H6' | 'P1' | 'P2';
type markType = 'none' | 'underline' | 'full';

export interface ILabelMark {
  mark?: markType
  markColor?: string
}

export interface ILabel extends ILabelMark {
  type: labelType
}
