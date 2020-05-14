import React from 'react';
import { withKnobs, text } from '@storybook/addon-knobs';
import VideoButton from 'frameworks/web/components/atoms/VideoButton/VideoButton';

export default {
  title: 'Video Button',
  decorators: [withKnobs],
};

export const DefaultVideoButton = () => {
  const href = text('링크 주소', 'https://youtube.com');
  return <VideoButton href={href} />;
};

DefaultVideoButton.story = {
  name: 'Video Button',
};
