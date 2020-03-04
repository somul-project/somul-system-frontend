import React from 'react';
import { number, text, withKnobs } from '@storybook/addon-knobs';
import { withActions } from '@storybook/addon-actions';
import ContentSwitcher from 'frameworks/web/components/atoms/ContentSwitcher/ContentSwitcher';

export default {
  title: 'Content Switcher',
  decorators: [withKnobs, withActions('click')],
};

export const DefaultContentSwitcher = () => {
  const index = number('Active Index (범위: 1 ~ 3 / 0은 아무것도 선택 안함)', 0, {
    range: true,
    min: 0,
    max: 3,
    step: 1,
  });

  const label1 = text('First Button Label', '도서관 참여 신청서');
  const label2 = text('Second Button Label', '강연자 참여 신청서');
  const label3 = text('Third Button Label', '봉사자 참여 신청서');

  return (
    <ContentSwitcher index={index} labels={[label1, label2, label3]} />
  );
};

DefaultContentSwitcher.story = {
  name: 'Content Switcher',
};
