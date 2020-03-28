import React from 'react';
import { text, withKnobs } from '@storybook/addon-knobs';
import { withActions } from '@storybook/addon-actions';
import TextArea from 'frameworks/web/components/atoms/TextArea/TextArea';
import { State, Store } from '@sambego/storybook-state';

export default {
  title: 'Text Area',
  decorators: [withKnobs, withActions('click')],
};

const store = new Store({
  textValue: '',
});

export const DefaultTextArea = () => {
  const defaultLabel = text('Default Label', '내용을 입력해주세요.');

  return (
    <State store={store}>
      <TextArea
        defaultLabel={defaultLabel}
        onValueChange={(value) => store.set({ textValue: value })}
      />
    </State>
  );
};

DefaultTextArea.story = {
  name: 'Text Area',
};
