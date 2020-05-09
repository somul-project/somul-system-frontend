// eslint-disable-next-line no-unused-vars
import React from 'react';

type ModalType = 'bottom-button' | 'top-x-button' | 'empty';

export interface IModal {
  isDisplay: boolean;
  children: React.ReactNode;
  type: ModalType;
  onClose: Function;
  title?: string;
  buttonLabel?: string;
  buttonOnClick?: Function;
}

export interface IModalContainer {
  isDisplay: boolean;
}
