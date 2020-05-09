import React from 'react';
import { State, Store } from '@sambego/storybook-state';
import { withKnobs, text, boolean } from '@storybook/addon-knobs';
import { withActions } from '@storybook/addon-actions';
import CheckBox from 'frameworks/web/components/atoms/CheckBox/CheckBox';

export default {
  title: 'CheckBox',
  decorators: [withKnobs, withActions('change')],
};

const store = new Store({
  isChecked: false,
});

export const DefaultCheckBox = () => {
  const label = text('Text', '이용 약관에 동의합니다.');

  const handleCheckboxChange = () => {
    store.set({ isChecked: !store.get('isChecked') });
  };

  return (
    <State store={store}>
      {(state) => [
        <CheckBox label={label} checked={state.isChecked} onChange={handleCheckboxChange} />,
      ]}
    </State>
  );
};

export const DisabledCheckBox = () => {
  const label = text('Text', '이용 약관에 동의합니다.');
  const isChecked = boolean('IsChecked', false);

  return <CheckBox label={label} checked={isChecked} disabled />;
};

DefaultCheckBox.story = {
  name: 'Check Box',
};

DisabledCheckBox.story = {
  name: 'Check Box (Disabled)',
};
