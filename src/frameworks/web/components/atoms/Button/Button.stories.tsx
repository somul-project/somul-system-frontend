import React from 'react';
import { withKnobs, text, boolean } from '@storybook/addon-knobs';
import { action } from '@storybook/addon-actions';
import Button from 'frameworks/web/components/atoms/Button/Button';

export default {
  title: 'Button',
  decorators: [withKnobs],
};

export const DefaultButton = () => {
  const label = text('Text', '바로가기');
  const isPrimary = boolean('IsPrimary', true);
  return <Button type="default" label={label} isPrimary={isPrimary} onClick={action('button-clicked')} />;
};

export const FieldButton = () => {
  const label = text('Text', '바로가기');
  const isPrimary = boolean('IsPrimary', true);
  return <Button type="field" label={label} isPrimary={isPrimary} onClick={action('button-clicked')} />;
};

export const SmallButton = () => {
  const label = text('Text', '바로가기');
  const isPrimary = boolean('IsPrimary', true);
  return <Button type="small" label={label} isPrimary={isPrimary} onClick={action('button-clicked')} />;
};

export const WideButton = () => {
  const label = text('Text', '바로가기');
  const isPrimary = boolean('IsPrimary', true);
  return <Button type="wide" label={label} isPrimary={isPrimary} onClick={action('button-clicked')} />;
};


DefaultButton.story = {
  name: 'Default Button',
};

FieldButton.story = {
  name: 'Field Button',
};

SmallButton.story = {
  name: 'Small Button',
};

WideButton.story = {
  name: 'Wide Button',
};
