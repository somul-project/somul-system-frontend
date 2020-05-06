import styled from 'styled-components';
// eslint-disable-next-line no-unused-vars
import React from 'react';
import theme from 'theme';
import ContentsBox from 'frameworks/web/components/atoms/ContentsBox/ContentsBox';
import Label from 'frameworks/web/components/atoms/Label/Label';
// eslint-disable-next-line no-unused-vars
import { IDividedCard, IDividedCardLeft } from 'interfaces/frameworks/web/components/molecules/DividedCard/IDividedCard';

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
  padding: 80px 0;
`;

export default class DividedCard extends React.PureComponent<IDividedCard> {
  render() {
    const { title, children, leftPadding } = this.props;
    const { left, right } = children;

    return (
      <CardContainer isDarkBackground={false}>
        <LeftContainer leftPadding={leftPadding}>
          <Label type="H4" color={theme.color.primary.White}>{title}</Label>
          {left}
        </LeftContainer>
        <RightContainer>
          {right}
        </RightContainer>
      </CardContainer>
    );
  }
}
