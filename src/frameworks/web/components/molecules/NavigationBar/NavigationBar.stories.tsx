import React from 'react';
import { withKnobs, text } from '@storybook/addon-knobs';
import NavigationBar from './NavigationBar';
import Label from '../../atoms/Label/Label';

export default {
  title: 'Navigation Bar',
  decorators: [withKnobs],
};

export const NavBar = () => {
  const name = text('이름', '김수민');
  const email = text('이메일', 'sumin123@naver.com');

  return (
    <div>
      <NavigationBar name={name} email={email} />
      <Label type="H1">TEST OVERFLOW</Label>
      <Label type="H1">TEST OVERFLOW</Label>
      <Label type="H1">TEST OVERFLOW</Label>
      <Label type="H1">TEST OVERFLOW</Label>
    </div>
  );
};
