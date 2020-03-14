import React from 'react';
import { withKnobs, number } from '@storybook/addon-knobs';
import ContentsBox from 'frameworks/web/components/atoms/ContentsBox/ContentsBox';
import theme from 'theme';

export default {
  title: 'Contents Box',
  decorators: [withKnobs],
};

export const LightBackgroundContentsBox = () => {
  const options = {
    range: true,
    min: 50,
    max: 300,
    step: 1,
  };
  const width = number('Width', 200, options).toString().concat('px');
  const height = number('Height', 200, options).toString().concat('px');

  return <ContentsBox width={width} height={height} bgDark={false} />;
};

export const DarkBackgroundContentsBox = () => {
  const options = {
    range: true,
    min: 50,
    max: 300,
    step: 1,
  };
  const width = number('Width', 200, options).toString().concat('px');
  const height = number('Height', 200, options).toString().concat('px');

  return <ContentsBox width={width} height={height} bgDark />;
};

DarkBackgroundContentsBox.story = {
  parameters: {
    backgrounds: [
      { name: 'Snow', value: theme.color.secondary.Snow, default: true },
      { name: 'Ash', value: theme.color.secondary.Ash },
    ],
  },
};
