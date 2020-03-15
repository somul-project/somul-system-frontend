import React from 'react';
import { text, withKnobs } from '@storybook/addon-knobs';
import { withActions } from '@storybook/addon-actions';
import Dropdown from 'frameworks/web/components/atoms/Dropdown/Dropdown';

export default {
  title: 'Dropdown',
  decorators: [withKnobs, withActions('click')],
};

const openAlert = (data: string) => {
  // eslint-disable-next-line no-undef,no-alert
  alert(`선택됨 : ${data}`);
};

export const DefaultDropdown = () => {
  const defaultLabel = text('Default Label', '원하는 지역을 선택해주세요');
  const dropdownListText = text('Dropdown List (쉼표로 구분)',
    '서울,부산,대구,인천,광주,대전,울산,세종,경기,강원,충북,충남,전북,전남,경북,경남,제주');

  const dropdownList = dropdownListText.split(',');

  return (
    <Dropdown
      defaultLabel={defaultLabel}
      data={dropdownList}
      onDataSelectChange={(data) => openAlert(data)}
    />
  );
};

DefaultDropdown.story = {
  name: 'Drop Down',
};
