import React from 'react';
import { withKnobs, text, select } from '@storybook/addon-knobs';
import Tag from 'frameworks/web/components/atoms/Tag/Tag';
import theme from 'theme';

export default {
  title: 'Tag',
  decorators: [withKnobs],
};

export const DefaultTag = () => {
  const label = text('Text', '태그');

  const colorList = {
    Azuru: theme.color.primary.Azure,
    Scarlet: theme.color.primary.Scarlet,
    Moon: theme.color.secondary.Moon,
    Failure: theme.color.alert.Failure,
    Success: theme.color.alert.Success,
  };
  const color = select('Color', colorList, theme.color.secondary.Moon);
  return <Tag color={color} label={label} />;
};

export const AcceptTag = () => {
  const label = text('Text', '승인');
  return <Tag type="accept" label={label} />;
};

export const PendingTag = () => {
  const label = text('Text', '심사중');
  return <Tag type="pending" label={label} />;
};

export const UnaccpetTag = () => {
  const label = text('Text', '미승인');
  return <Tag type="unaccept" label={label} />;
};

DefaultTag.story = {
  name: 'Default Tag',
};
AcceptTag.story = {
  name: 'Accept Tag',
};
PendingTag.story = {
  name: 'Pending Tag',
};
UnaccpetTag.story = {
  name: 'Unaccept Tag',
};
