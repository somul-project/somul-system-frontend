import React from 'react';
import { text, boolean, withKnobs } from '@storybook/addon-knobs';
import { action } from '@storybook/addon-actions';
import TextField from 'frameworks/web/components/atoms/TextField/TextField';
import { State, Store } from '@sambego/storybook-state';

export default {
  title: 'Text Field',
  decorators: [withKnobs],
};

const store = new Store({
  textValue: '',
});

export const DefaultTextField = () => {
  const defaultLabel = text('Default Label', '내용을 입력해주세요.');
  const readOnly = boolean('readOnly', false);
  const isButton = boolean('isButton', false);

  return (
    <State store={store}>
      <TextField
        defaultLabel={defaultLabel}
        onValueChange={(value) => store.set({ textValue: value })}
        readOnly={readOnly}
        isButton={isButton}
        buttonSrc="icon/highlight-off.svg"
        onButtonClicked={action('button-clicked')}
      />
    </State>
  );
};

DefaultTextField.story = {
  name: 'Text Field',
};
