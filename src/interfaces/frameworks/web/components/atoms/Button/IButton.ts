type ButtonType = 'default' | 'field' | 'small' | 'wide';

export interface IButton {
    type?: ButtonType
    label: string
    isPrimary: boolean
    onClick: any
}
