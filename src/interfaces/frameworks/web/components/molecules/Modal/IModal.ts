// eslint-disable-next-line no-unused-vars
import React from 'react';

type ModalType = 'bottom-button' | 'top-x-button' | 'empty';

export interface IModal {
  isOpen: boolean;
  children: React.ReactNode;
  type: ModalType;
  onClose: Function;
  title?: string;
  buttonLabel?: string;
  buttonOnClick?: Function;
}

export interface IModalBackground {
  isOpen: boolean;
}
