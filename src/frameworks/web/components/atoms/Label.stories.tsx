import React from 'react';
// import {action} from '@storybook/addon-actions';
import {withKnobs, text} from '@storybook/addon-knobs';
import {LabelH1, LabelH2, LabelH3, LabelH4, LabelH5, LabelH6, LabelP1, LabelP2} from './Label';

export default {
    title: 'Label',
    decorators: [withKnobs]
}

export const H1 = () => {
    const label = text('Text', '소프트웨어에 물들다');
    return <LabelH1>{label}</LabelH1>;
};

export const H2 = () => {
    const label = text('Text', '소프트웨어에 물들다');
    return <LabelH2>{label}</LabelH2>;
};

export const H3 = () => {
    const label = text('Text', '소프트웨어에 물들다');
    return <LabelH3>{label}</LabelH3>;
};

export const H4 = () => {
    const label = text('Text', '소프트웨어에 물들다');
    return <LabelH4>{label}</LabelH4>;
};

export const H5 = () => {
    const label = text('Text', '소프트웨어에 물들다');
    return <LabelH5>{label}</LabelH5>;
};

export const H6 = () => {
    const label = text('Text', '소프트웨어에 물들다');
    return <LabelH6>{label}</LabelH6>;
};

export const P1 = () => {
    const label = text('Text', '소프트웨어에 물들다');
    return <LabelP1>{label}</LabelP1>;
};

export const P2 = () => {
    const label = text('Text', '소프트웨어에 물들다');
    return <LabelP2>{label}</LabelP2>;
};

H1.story = {
    name: 'H1'
};
H2.story = {
    name: 'H2'
};
H3.story = {
    name: 'H3'
};
H4.story = {
    name: 'H4'
};
H5.story = {
    name: 'H5'
};
H6.story = {
    name: 'H6'
};
P1.story = {
    name: 'P1'
};
P2.story = {
    name: 'P2'
};