import React from 'react';
import { withKnobs, text, boolean } from '@storybook/addon-knobs';
import { withActions } from '@storybook/addon-actions';
import RadioGroup from './RadioGroup';

export default {
  title: 'Radio Group',
  decorators: [withKnobs, withActions('change')],
};

const changeAlert = (data: string) => {
  // eslint-disable-next-line no-console
  console.log(`선택됨 : ${data}`);
};

export const TwoRadioButtonGroup = () => {
  const label1 = text('First Text', '선택 1');
  const label2 = text('Second Text', '선택 2');
  const disabled = boolean('disabled', false);

  return (
    <RadioGroup
      id="tworadio"
      data={[label1, label2]}
      onDataSelectChange={changeAlert}
      disabled={disabled}
    />
  );
};

export const ThreeRadioButtonGroup = () => {
  const label1 = text('First Text', '선택 1');
  const label2 = text('Second Text', '선택 2');
  const label3 = text('Third Text', '선택 3');
  const disabled = boolean('disabled', false);

  return (
    <RadioGroup
      id="threeradio"
      data={[label1, label2, label3]}
      onDataSelectChange={changeAlert}
      disabled={disabled}
    />
  );
};

TwoRadioButtonGroup.story = {
  name: 'Radio Group (2 Buttons)',
};

ThreeRadioButtonGroup.story = {
  name: 'Radio Group (3 Buttons)',
};
