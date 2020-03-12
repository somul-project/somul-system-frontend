// eslint-disable-next-line no-unused-vars
import { ChangeEventHandler } from 'react';

export type EdgeType = 'left' | 'right' | 'none';

export interface ISelectElement {
  edge: EdgeType
  active: boolean
}

export interface ISelect {
  labels: string[]
  onElementClick: Function
}

export interface ISelectState {
  selectNumber: number
}
