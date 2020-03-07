import React from 'react';
import { withKnobs, text } from '@storybook/addon-knobs';
import {
  AcceptTag, PendingTag, UnacceptTag,
} from './Tag';

export default {
  title: 'Tag',
  decorators: [withKnobs],
};

export const Accept = () => {
  const label = text('Text', '승인완료');
  return <AcceptTag>{label}</AcceptTag>;
}

export const Pending = () => {
  const label = text('Text', '심사중');
  return <PendingTag>{label}</PendingTag>;
}

export const Unaccpet = () => {
  const label = text('Text', '미승인');
  return <UnacceptTag>{label}</UnacceptTag>;
}

Accept.story = {
  name: 'Accept Tag',
};
Pending.story = {
  name: 'Pending Tag',
};
Unaccpet.story = {
  name: 'Unaccpet Tag',
};
