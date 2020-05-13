import { withKnobs } from '@storybook/addon-knobs';
import React from 'react';
import Loading from 'frameworks/web/components/atoms/Loading/Loading';

export default {
  title: 'Loading',
  decorators: [withKnobs],
};

export const LoadingIndicator = () => {
  return <Loading />;
};

LoadingIndicator.story = {
  name: 'Loading Indicator',
};
