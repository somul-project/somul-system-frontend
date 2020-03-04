// eslint-disable-next-line no-unused-vars
import { ChangeEventHandler } from 'react';

export interface IBaseCheckBox {
  checked?: boolean
  disabled?: boolean
  onChange?: ChangeEventHandler<HTMLInputElement>
}

export interface ICheckBox {
  defaultCheck?: boolean
  className?: string
  label: string
  checked: boolean
  disabled?: boolean
  onChange?: ChangeEventHandler<HTMLInputElement>,
}
