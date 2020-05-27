import React from 'react';
import { withKnobs, text } from '@storybook/addon-knobs';
import { action } from '@storybook/addon-actions';
import theme from 'theme';
import LectureCard from 'frameworks/web/components/molecules/LectureCard/LectureCard';

export default {
  title: 'Lecture Card',
  decorators: [withKnobs],
};

export const SimpleLectureCard = () => {
  const title = text('Card Title', '프로그래머, 인공지능 시대의 꽤 괜찮은 직업이지 아니한가?');
  const speaker = text('Card Speaker', '박성우');

  return (
    <div style={{ width: '350px', margin: '20px' }}>
      <LectureCard title={title} speaker={speaker} onCardClick={action('card-clicked')} />
    </div>
  );
};

SimpleLectureCard.story = {
  parameters: {
    backgrounds: [{ name: 'Snow', value: theme.color.secondary.Snow, default: true }],
  },
};
