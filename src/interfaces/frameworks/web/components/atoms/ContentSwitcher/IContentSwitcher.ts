export interface IBaseButtonContentButton {
  active: boolean;
}

export type EdgeType = 'left' | 'right' | 'none';

export interface IContentButton extends IBaseButtonContentButton {
  edge: EdgeType;
}

export interface IContentSwitcher {
  index: number;
  labels: string[];
}
