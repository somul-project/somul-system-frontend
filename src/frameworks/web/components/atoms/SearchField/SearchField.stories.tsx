import React from 'react';
import { text, withKnobs } from '@storybook/addon-knobs';
import { withActions } from '@storybook/addon-actions';
import SearchField from 'frameworks/web/components/atoms/SearchField/SearchField';
import { State, Store } from '@sambego/storybook-state';

export default {
  title: 'Search',
  decorators: [withKnobs, withActions('click')],
};

const store = new Store({
  searchValue: '',
});

const openAlert = (data: string) => {
  // eslint-disable-next-line no-undef,no-alert
  alert(`검색 버튼 클릭됨 : ${data}`);
};

export const DefaultSearchField = () => {
  const defaultLabel = text('Default Label', '검색어를 입력해주세요');

  return (
    <State store={store}>
      {(state) => [
        <SearchField
          defaultLabel={defaultLabel}
          onValueChange={(value) => store.set({ searchValue: value })}
          onSearchButtonClick={() => openAlert(state.searchValue)}
        />,
      ]}

    </State>
  );
};

DefaultSearchField.story = {
  name: 'Search Field',
};
