import React from 'react';
import styled from 'styled-components';
import theme from 'theme';

import ContentsBox from 'frameworks/web/components/atoms/ContentsBox/ContentsBox';
import Label from 'frameworks/web/components/atoms/Label/Label';
import { ILectureCard } from 'interfaces/frameworks/web/components/molecules/LectureCard/ILectureCard';

const CardContainer = styled(ContentsBox)`
  width: auto;
  height: auto;
  padding: 40px 48px;
  background-color: white;
  text-align: center;
  cursor: pointer;
  @media (hover: hover) {
    &:hover {
      box-shadow: 0 5px 30px 0 rgba(155, 155, 155, 0.4);
    }
  }
`;

const SpeakerContainer = styled.div`
  display: flex;
  margin-top: 24px;
  width: 100%;
  justify-content: center;
`;

export default function LectureCard({
  title,
  speaker,
  onCardClick,
}: ILectureCard): React.ReactElement {
  return (
    // eslint-disable-next-line jsx-a11y/click-events-have-key-events,jsx-a11y/no-static-element-interactions
    <div onClick={() => onCardClick()}>
      <CardContainer isDarkBackground>
        <Label type="H4" color={theme.color.primary.Azure}>
          {title}
        </Label>
        <SpeakerContainer>
          <Label type="H5" color={theme.color.secondary.Moon} style={{ marginRight: '16px' }}>
            강연자
          </Label>
          <Label type="P1" color={theme.color.secondary.Moon}>
            {speaker}
          </Label>
        </SpeakerContainer>
      </CardContainer>
    </div>
  );
}
