import React from 'react';
import { text, boolean, withKnobs } from '@storybook/addon-knobs';
import { withActions } from '@storybook/addon-actions';
import TextField from 'frameworks/web/components/atoms/TextField/TextField';
import { State, Store } from '@sambego/storybook-state';

export default {
  title: 'Text Field',
  decorators: [withKnobs, withActions('click')],
};

const store = new Store({
  textValue: '',
});

export const DefaultTextField = () => {
  const defaultLabel = text('Default Label', '내용을 입력해주세요.');
  const readOnly = boolean('readOnly', false);

  return (
    <State store={store}>
      <TextField
        defaultLabel={defaultLabel}
        onValueChange={(value) => store.set({ textValue: value })}
        readOnly={readOnly}
      />
    </State>
  );
};

DefaultTextField.story = {
  name: 'Text Field',
};
