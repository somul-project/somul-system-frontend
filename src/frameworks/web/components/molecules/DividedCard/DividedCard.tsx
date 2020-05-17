import React from 'react';
import styled from 'styled-components';
import theme from 'theme';

import ContentsBox from 'frameworks/web/components/atoms/ContentsBox/ContentsBox';
import Label from 'frameworks/web/components/atoms/Label/Label';
import {
  IDividedCard,
  IDividedCardLeft,
} from 'interfaces/frameworks/web/components/molecules/DividedCard/IDividedCard';

const CardContainer = styled(ContentsBox)`
  width: 1100px;
  margin: 0 auto;
  background-color: white;
  text-align: center;
  display: flex;
`;

const LeftContainer = styled.div`
  width: 380px;
  height: 100%;
  border-top-left-radius: 30px;
  border-bottom-left-radius: 30px;
  padding: ${(props: IDividedCardLeft) => props.leftPadding ?? '80px 0'};
  background-color: ${theme.color.primary.Sky};
`;
const RightContainer = styled.div`
  width: 730px;
  height: 100%;
  align-self: center;
`;

export default function DividedCard({
  title,
  children: { left, right },
  leftPadding,
}: IDividedCard): React.ReactElement {
  return (
    <CardContainer isDarkBackground={false}>
      <LeftContainer leftPadding={leftPadding}>
        <Label type="H4" color={theme.color.primary.White}>
          {title}
        </Label>
        {left}
      </LeftContainer>
      <RightContainer>{right}</RightContainer>
    </CardContainer>
  );
}
