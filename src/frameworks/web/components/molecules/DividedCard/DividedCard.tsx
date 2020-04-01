import styled from 'styled-components';
// eslint-disable-next-line no-unused-vars
import React, { ReactNode } from 'react';
import theme from 'theme';
import ContentsBox from 'frameworks/web/components/atoms/ContentsBox/ContentsBox';
import { LabelH4 } from 'frameworks/web/components/atoms/Label/Label';
// eslint-disable-next-line no-unused-vars
import { IDividedCard } from 'interfaces/frameworks/web/components/molecules/DividedCard/IDividedCard';

const CardContainer = styled(ContentsBox)`
  width: 1100px;
  min-height: 516px;
  margin: 210px auto;
  background-color: white;
  text-align: center;
  display: flex;
`;

const LeftContainer = styled.div`
  width: 380px;
  height: 100%;
  border-top-left-radius: 30px;
  border-bottom-left-radius: 30px;
  padding: 80px 0;
  background-color: ${theme.color.primary.Azure};
`;
const RightContainer = styled.div`
  width: 730px;
  height: 100%;
  padding: 80px 0;
`;

export default class DividedCard extends React.PureComponent<IDividedCard> {
  render() {
    const { title, children } = this.props;
    const { left, right } = children;

    return (
      <CardContainer isDarkBackground={false}>
        <LeftContainer>
          <LabelH4 color={theme.color.primary.White}>{title}</LabelH4>
          {left}
        </LeftContainer>
        <RightContainer>
          {right}
        </RightContainer>
      </CardContainer>
    );
  }
}
