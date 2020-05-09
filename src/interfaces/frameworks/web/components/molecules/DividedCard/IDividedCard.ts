// eslint-disable-next-line no-unused-vars
import { ReactNode } from 'react';

export interface IDividedCard {
  title: string;
  children: {
    left: ReactNode;
    right: ReactNode;
  };
  leftPadding?: string;
}

export interface IDividedCardLeft {
  leftPadding?: string;
}
