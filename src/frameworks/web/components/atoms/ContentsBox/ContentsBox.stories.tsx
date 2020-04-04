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
  const width = number('Width', 200, options);
  const height = number('Height', 200, options);

  return <ContentsBox width={width} height={height} isDarkBackground={false} />;
};

export const DarkBackgroundContentsBox = () => {
  const options = {
    range: true,
    min: 50,
    max: 300,
    step: 1,
  };
  const width = number('Width', 200, options);
  const height = number('Height', 200, options);

  return <ContentsBox width={width} height={height} isDarkBackground />;
};

export const OnlyHeightContentsBox = () => {
  const options = {
    range: true,
    min: 50,
    max: 300,
    step: 1,
  };
  const height = number('Height', 200, options);

  return <ContentsBox height={height} isDarkBackground />;
};

DarkBackgroundContentsBox.story = {
  parameters: {
    backgrounds: [
      { name: 'Snow', value: theme.color.secondary.Snow, default: true },
      { name: 'Ash', value: theme.color.secondary.Ash },
    ],
  },
};

OnlyHeightContentsBox.story = {
  parameters: {
    backgrounds: [
      { name: 'Snow', value: theme.color.secondary.Snow, default: true },
      { name: 'Ash', value: theme.color.secondary.Ash },
    ],
  },
};
