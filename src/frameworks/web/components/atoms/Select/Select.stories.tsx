import React from 'react';
import { text, withKnobs } from '@storybook/addon-knobs';
import { withActions } from '@storybook/addon-actions';
import Select from 'frameworks/web/components/atoms/Select/Select';

export default {
  title: 'Select',
  decorators: [withKnobs, withActions('click')],
};

export const TwoElementsSelect = () => {
  const label1 = text('First Select Element', '네');
  const label2 = text('Second Select Element', '아니요');

  return (
    <Select
      labels={[label1, label2]}
      onElementClick={(clickedNum: number) => (clickedNum)}
    />
  );
};

export const ThreeElementsSelect = () => {
  const label1 = text('First Select Element', '1');
  const label2 = text('Second Select Element', '2');
  const label3 = text('Third Select Element', '3');

  return (
    <Select
      labels={[label1, label2, label3]}
      onElementClick={(clickedNum: number) => (clickedNum)}
    />
  );
};

TwoElementsSelect.story = {
  name: 'Two Elements Select',
};

ThreeElementsSelect.story = {
  name: 'Three Elements Select',
};
