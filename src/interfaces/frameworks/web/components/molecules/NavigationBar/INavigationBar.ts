import { CSSProperties } from 'react';

export interface INavBar {
  name: string;
  email: string;
  style?: CSSProperties;
}

export interface INavBarState {
  isEnable: boolean;
}
