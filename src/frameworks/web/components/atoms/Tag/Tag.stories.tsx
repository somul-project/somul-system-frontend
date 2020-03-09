import React from 'react';
import { withKnobs, text, color } from '@storybook/addon-knobs';
import Tag from 'frameworks/web/components/atoms/Tag/Tag';
import theme from 'theme';

export default {
  title: 'Tag',
  decorators: [withKnobs],
};

export const DefaultTag = () => {
  const label = text('Text', '태그');
  const pickColor = color('Color', theme.color.secondary.Moon);
  return <Tag color={pickColor}>{label}</Tag>;
};

export const ProgressTag = () => (
  <>
    <Tag color={theme.color.alert.Success}>승인</Tag>
    <Tag color={theme.color.secondary.Moon}>심사중</Tag>
    <Tag color={theme.color.alert.Failure}>미승인</Tag>
  </>
);

DefaultTag.story = {
  name: 'Default Tag',
};

ProgressTag.story = {
  name: 'Progress Tag',
};
