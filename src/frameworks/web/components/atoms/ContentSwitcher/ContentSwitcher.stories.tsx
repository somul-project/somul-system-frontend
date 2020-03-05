import React from 'react';
import { number, text, withKnobs } from '@storybook/addon-knobs';
import { withActions } from '@storybook/addon-actions';
import ContentSwitcher from 'frameworks/web/components/atoms/ContentSwitcher/ContentSwitcher';

export default {
  title: 'Content Switcher',
  decorators: [withKnobs, withActions('click')],
};

export const DefaultContentSwitcher = () => {
  const index = number('Active Index (범위: 1 ~ 2 / 0은 아무것도 선택 안함)', 0, {
    range: true,
    min: 0,
    max: 2,
    step: 1,
  });

  const label1 = text('First Button Label', '1');
  const label2 = text('Second Button Label', '2');

  return (
    <ContentSwitcher index={index} labels={[label1, label2]} />
  );
};

export const ThreeButtonContentSwitcher = () => {
  const index = number('Active Index (범위: 1 ~ 3 / 0은 아무것도 선택 안함)', 0, {
    range: true,
    min: 0,
    max: 3,
    step: 1,
  });

  const label1 = text('First Button Label', '1');
  const label2 = text('Second Button Label', '2');
  const label3 = text('Third Button Label', '3');

  return (
    <ContentSwitcher index={index} labels={[label1, label2, label3]} />
  );
};

export const FourButtonContentSwitcher = () => {
  const index = number('Active Index (범위: 1 ~ 4 / 0은 아무것도 선택 안함)', 0, {
    range: true,
    min: 0,
    max: 4,
    step: 1,
  });

  const label1 = text('First Button Label', '1');
  const label2 = text('Second Button Label', '2');
  const label3 = text('Third Button Label', '3');
  const label4 = text('Forth Button Label', '4');

  return (
    <ContentSwitcher index={index} labels={[label1, label2, label3, label4]} />
  );
};

DefaultContentSwitcher.story = {
  name: 'Content Switcher (2 Buttons)',
};

ThreeButtonContentSwitcher.story = {
  name: 'Content Switcher (3 Buttons)',
};

FourButtonContentSwitcher.story = {
  name: 'Content Switcher (4 Buttons)',
};
