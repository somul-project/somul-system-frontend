import React from 'react';
import { withKnobs, boolean, text } from '@storybook/addon-knobs';
import { action } from '@storybook/addon-actions';
import SingleCard from 'frameworks/web/components/molecules/SingleCard/SingleCard';
import { LabelP1 } from 'frameworks/web/components/atoms/Label/Label';
import theme from 'theme';

export default {
  title: 'Single Card',
  decorators: [withKnobs],
};

export const DarkBackgroundSingleCard = () => {
  const buttonLabel: string[] = [];
  const buttonOnClick: Function[] = [];

  const title = text('Card Title', 'Card Title');
  const label = text('중간 Label', '따뜻한 평화스러운 얼음 심장의 청춘을 사막이다.');
  const isTwoButton = boolean('버튼 2개', false);
  if (isTwoButton) {
    const buttonLabel2 = text('Basic Button Label', '취소');
    buttonLabel.push(buttonLabel2);
    buttonOnClick.push(action('button-clicked'));
  }
  const buttonLabel1 = text('Primary Button Label', '확인');
  buttonLabel.push(buttonLabel1);
  buttonOnClick.push(action('button-clicked'));

  return (
    <SingleCard title={title} buttonLabel={buttonLabel} buttonOnClick={buttonOnClick}>
      <LabelP1 color={theme.color.secondary.Moon}>
        {label}
      </LabelP1>
    </SingleCard>
  );
};

DarkBackgroundSingleCard.story = {
  parameters: {
    backgrounds: [
      { name: 'Snow', value: theme.color.secondary.Snow, default: true },
    ],
  },
};
