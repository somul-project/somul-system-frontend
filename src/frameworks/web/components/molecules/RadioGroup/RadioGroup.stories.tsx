import React from 'react';
import { withKnobs, text } from '@storybook/addon-knobs';
import RadioGroup from './RadioGroup';

export default {
  title: 'Radio Group',
  decorators: [withKnobs],
};

const openAlert = (data: string) => {
  // eslint-disable-next-line no-undef,no-alert
  alert(`선택됨 : ${data}`);
};

export const TwoRadioButtonGroup = () => {
  const label1 = text('First Text', '선택 1');
  const label2 = text('Second Text', '선택 2');

  return (
    <RadioGroup id="tworadio" data={[label1, label2]} onDataSelectChange={openAlert} />
  );
};

export const ThreeRadioButtonGroup = () => {
  const label1 = text('First Text', '선택 1');
  const label2 = text('Second Text', '선택 2');
  const label3 = text('Third Text', '선택 3');

  return (
    <RadioGroup id="threeradio" data={[label1, label2, label3]} onDataSelectChange={openAlert} />
  );
};

TwoRadioButtonGroup.story = {
  name: 'Radio Group (2 Buttons)',
};

ThreeRadioButtonGroup.story = {
  name: 'Radio Group (3 Buttons)',
};
