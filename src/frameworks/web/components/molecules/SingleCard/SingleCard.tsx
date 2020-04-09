import styled from 'styled-components';
// eslint-disable-next-line no-unused-vars
import React, { ReactNode } from 'react';
import theme from 'theme';
import ContentsBox from 'frameworks/web/components/atoms/ContentsBox/ContentsBox';
import Label from 'frameworks/web/components/atoms/Label/Label';
import Button from 'frameworks/web/components/atoms/Button/Button';
// eslint-disable-next-line no-unused-vars
import { ISingleCard } from 'interfaces/frameworks/web/components/molecules/SingleCard/ISingleCard';

const CardContainer = styled(ContentsBox)`
  width: 730px;
  height: auto;
  padding: 64px 0 64px 0;
  margin: 210px auto;
  background-color: white;
  text-align: center;
`;

const ContextContainer = styled.div`
  margin: 48px 0 48px 0;
`;

const ButtonContainer = styled.div`
  text-align: center;
`;

const EachButtonContainer = styled.div`
  display: inline-block;
  margin: 0 15px 0 15px;
`;

export default class SingleCard extends React.PureComponent<ISingleCard> {
  render() {
    const {
      title, children, buttonLabel, buttonOnClick,
    } = this.props;
    const buttonElements: ReactNode[] = [];

    buttonLabel.forEach((l, i) => {
      buttonElements.push(
        <EachButtonContainer>
          <Button label={l} isPrimary={i === buttonLabel.length - 1} onClick={buttonOnClick[i]} />
        </EachButtonContainer>,
      );
    });
    return (
      <CardContainer isDarkBackground={false}>
        <Label type="H4" color={theme.color.primary.Azure}>{title}</Label>
        <ContextContainer>
          {children}
        </ContextContainer>
        <ButtonContainer>
          {buttonElements}
        </ButtonContainer>
      </CardContainer>
    );
  }
}
