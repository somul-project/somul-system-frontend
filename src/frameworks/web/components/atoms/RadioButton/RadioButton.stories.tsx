import React from 'react';
import { withKnobs, text } from '@storybook/addon-knobs';
import RadioButton from './RadioButton';

export default {
  title: 'Radio Button',
  decorators: [withKnobs],
};

export const TwoRadioButton = () => {
  const label1 = text('First Text', '선택 1');
  const label2 = text('Second Text', '선택 2');

  return (
    <div style={{
      display: 'flex',
    }}
    >
      <RadioButton label={label1} id="radio1" name="radio" value={label1} />
      <RadioButton label={label2} id="radio2" name="radio" value={label2} />
    </div>
  );
};

export const ThreeRadioButton = () => {
  const label1 = text('First Text', '선택 1');
  const label2 = text('Second Text', '선택 2');
  const label3 = text('Third Text', '선택 3');

  return (
    <div style={{
      display: 'flex',
    }}
    >
      <RadioButton label={label1} id="radio1" name="radio" value={label1} />
      <RadioButton label={label2} id="radio2" name="radio" value={label2} />
      <RadioButton label={label3} id="radio3" name="radio" value={label3} />
    </div>
  );
};

TwoRadioButton.story = {
  name: 'Radio Button (2 Buttons)',
};

ThreeRadioButton.story = {
  name: 'Radio Button (3 Buttons)',
};
