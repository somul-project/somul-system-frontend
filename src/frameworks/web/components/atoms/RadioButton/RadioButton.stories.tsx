import React from 'react';
import { withKnobs, text, boolean } from '@storybook/addon-knobs';
import { action } from '@storybook/addon-actions';
import RadioButton from './RadioButton';

export default {
  title: 'Radio Button',
  decorators: [withKnobs],
};

export const RadioButtonStory = () => {
  const label = text('Radio Text', '선택');
  const disabled = boolean('disabled', false);

  return (
    <RadioButton
      label={label}
      id="radio1"
      name="radio"
      value={label}
      edge="left"
      onRadioClick={action('button-clicked')}
      disabled={disabled}
    />
  );
};

RadioButtonStory.story = {
  name: 'Radio Button',
};
