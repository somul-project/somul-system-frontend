type ButtonType = 'default' | 'field' | 'small' | 'wide';

export interface IBaseButton {
    isPrimary: boolean
    onClick: any
}

export interface IButton extends IBaseButton{
    type?: ButtonType
    label: string
}
