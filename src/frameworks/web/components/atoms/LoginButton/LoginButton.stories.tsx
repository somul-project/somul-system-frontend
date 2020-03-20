import React from 'react';
import { withKnobs, select } from '@storybook/addon-knobs';
import { action } from '@storybook/addon-actions';
import LoginButton from 'frameworks/web/components/atoms/LoginButton/LoginButton';
// eslint-disable-next-line no-unused-vars
import { LoginButtonType } from 'interfaces/frameworks/web/components/atoms/LoginButton/ILoginButton';

export default {
  title: 'Login Button',
  decorators: [withKnobs],
};

export const OneLoginButton = () => {
  const options = ['google', 'github'];
  const value = select('Login from', options, 'google');
  return <LoginButton type={value as LoginButtonType} onClick={action('button-clicked')} />;
};

OneLoginButton.story = {
  name: 'One Login Button',
};
