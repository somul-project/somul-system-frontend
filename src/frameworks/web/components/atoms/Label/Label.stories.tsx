import React from 'react';
import { withKnobs, text, color, select } from '@storybook/addon-knobs';
import theme from 'theme';
import Label from './Label';

export default {
  title: 'Label',
  decorators: [withKnobs],
};

export const H1 = () => {
  const label = text('Text', '소프트웨어에 물들다');
  const mark = select('Mark', ['none', 'underline', 'full'], 'none');
  const markColor = color('Mark Color', theme.color.alert.Warning);
  return (
    <Label mark={mark} markColor={markColor} type="H1">
      {label}
    </Label>
  );
};

export const H2 = () => {
  const label = text('Text', '소프트웨어에 물들다');
  const mark = select('Mark', ['none', 'underline', 'full'], 'none');
  const markColor = color('Mark Color', theme.color.alert.Warning);
  return (
    <Label mark={mark} markColor={markColor} type="H2">
      {label}
    </Label>
  );
};

export const H3 = () => {
  const label = text('Text', '소프트웨어에 물들다');
  const mark = select('Mark', ['none', 'underline', 'full'], 'none');
  const markColor = color('Mark Color', theme.color.alert.Warning);
  return (
    <Label mark={mark} markColor={markColor} type="H3">
      {label}
    </Label>
  );
};

export const H4 = () => {
  const label = text('Text', '소프트웨어에 물들다');
  const mark = select('Mark', ['none', 'underline', 'full'], 'none');
  const markColor = color('Mark Color', theme.color.alert.Warning);
  return (
    <Label mark={mark} markColor={markColor} type="H4">
      {label}
    </Label>
  );
};

export const H5 = () => {
  const label = text('Text', '소프트웨어에 물들다');
  const mark = select('Mark', ['none', 'underline', 'full'], 'none');
  const markColor = color('Mark Color', theme.color.alert.Warning);
  return (
    <Label mark={mark} markColor={markColor} type="H5">
      {label}
    </Label>
  );
};

export const H6 = () => {
  const label = text('Text', '소프트웨어에 물들다');
  const mark = select('Mark', ['none', 'underline', 'full'], 'none');
  const markColor = color('Mark Color', theme.color.alert.Warning);
  return (
    <Label mark={mark} markColor={markColor} type="H6">
      {label}
    </Label>
  );
};

export const P1 = () => {
  const label = text('Text', '소프트웨어에 물들다');
  const mark = select('Mark', ['none', 'underline', 'full'], 'none');
  const markColor = color('Mark Color', theme.color.alert.Warning);
  return (
    <Label mark={mark} markColor={markColor} type="P1">
      {label}
    </Label>
  );
};

export const P2 = () => {
  const label = text('Text', '소프트웨어에 물들다');
  const mark = select('Mark', ['none', 'underline', 'full'], 'none');
  const markColor = color('Mark Color', theme.color.alert.Warning);
  return (
    <Label mark={mark} markColor={markColor} type="P2">
      {label}
    </Label>
  );
};

H1.story = {
  name: 'H1',
};
H2.story = {
  name: 'H2',
};
H3.story = {
  name: 'H3',
};
H4.story = {
  name: 'H4',
};
H5.story = {
  name: 'H5',
};
H6.story = {
  name: 'H6',
};
P1.story = {
  name: 'P1',
};
P2.story = {
  name: 'P2',
};
