import React from 'react';
import { withKnobs, text } from '@storybook/addon-knobs';
import DividedCard from 'frameworks/web/components/molecules/DividedCard/DividedCard';
import Label from 'frameworks/web/components/atoms/Label/Label';
import theme from 'theme';

export default {
  title: 'Divided Card',
  decorators: [withKnobs],
};

export const SimpleTextDividedCard = () => {
  const title = text('Card Title', 'Card Title');
  const leftLabel = text('왼쪽 Label', '파란 구역');
  const rightLabel = text('중간 Label', '흰 구역');

  return (
    <DividedCard title={title}>
      {{
        left: (
          <Label type="P1" color={theme.color.primary.White}>
            {leftLabel}
          </Label>
        ),
        right: <Label type="P1">{rightLabel}</Label>,
      }}
    </DividedCard>
  );
};

SimpleTextDividedCard.story = {
  parameters: {
    backgrounds: [{ name: 'Snow', value: theme.color.secondary.Snow, default: true }],
  },
};
