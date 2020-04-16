import React from 'react';
import { withKnobs, select } from '@storybook/addon-knobs';
import { action } from '@storybook/addon-actions';
import SignButton from 'frameworks/web/components/atoms/SignButton/SignButton';
// eslint-disable-next-line no-unused-vars
import { SignButtonCiteType, SignButtonType } from 'interfaces/frameworks/web/components/atoms/SignButton/ISignButton';

export default {
  title: 'Sign In&Up Button',
  decorators: [withKnobs],
};

export const SignButtonStory = () => {
  const typeOptions = ['signin', 'signup'];
  const typeValue = select('type', typeOptions, 'signin');
  const citeOptions = ['google', 'github', 'email'];
  const citeValue = select('Login from', citeOptions, 'google');
  return (
    <SignButton
      buttonType={typeValue as SignButtonType}
      citeType={citeValue as SignButtonCiteType}
      onClick={action('button-clicked')}
    />
  );
};

SignButtonStory.story = {
  name: 'Sign In&Up Button',
};
