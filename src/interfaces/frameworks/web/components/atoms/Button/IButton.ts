// eslint-disable-next-line no-unused-vars
import React from 'react';

export interface IButton {
    type: 'default' | 'field' | 'small' | 'wide'
    label: string
    isPrimary: boolean
    onClick: any
}
