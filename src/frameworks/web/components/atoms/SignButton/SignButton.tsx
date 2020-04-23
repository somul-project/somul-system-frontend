import styled from 'styled-components';
import theme from 'theme';
import React from 'react';
// eslint-disable-next-line no-unused-vars
import { ISignButton, ISignButtonElement } from 'interfaces/frameworks/web/components/atoms/SignButton/ISignButton';

const SignButtonContainer = styled.div`
  background-color:
    ${(props: ISignButtonElement) => {
    if (props.citeType === 'github') {
      return (theme.color.primary.Black);
    }
    if (props.citeType === 'google') {
      return (theme.color.secondary.Ash);
    }
    return (theme.color.primary.White);
  }};
  color:
    ${(props: ISignButtonElement) => (props.citeType === 'github' ? theme.color.primary.White : theme.color.primary.Black)}
    !important;
  outline: none;
  cursor: pointer;
  border-radius: 10px;
  border: solid 1px
    ${(props: ISignButtonElement) => (props.citeType === 'github' ? theme.color.primary.Black : theme.color.secondary.Ash)};
  width: 350px;
  height: 64px;
`;

const SignButtonImg = styled.img`
  width: ${(props: ISignButtonElement) => (props.citeType === 'github' ? '32px' : '24px')};
  height: ${(props: ISignButtonElement) => (props.citeType === 'github' ? '32px' : '24px')};;
  margin:
    ${(props: ISignButtonElement) => (props.citeType === 'github' ? '15px 0px 15px 19px' : '19px 0px 19px 23px')};;
  float: left;
`;

const SignButtonLabel = styled.p`
  font-family: 'Noto Sans KR', sans-serif;
  font-size: 16px;
  font-weight: bold;
  margin: 19px 31px 19px 0px;
  float: right;
`;

export default class SignButton extends React.PureComponent<ISignButton> {
  render() {
    const {
      buttonType, citeType, onClick,
    } = this.props;

    let citeString: string;
    if (citeType === 'google') {
      citeString = 'Google 계정으로';
    } else if (citeType === 'github') {
      citeString = 'Github 계정으로';
    } else {
      citeString = '이메일로';
    }

    return (
      <SignButtonContainer onClick={() => onClick()} citeType={citeType}>
        <SignButtonImg src={`logo/${citeType}.svg`} citeType={citeType} />
        <SignButtonLabel>
          {citeString}
          {' '}
          {buttonType === 'signin' ? '로그인' : '회원가입'}
        </SignButtonLabel>
      </SignButtonContainer>
    );
  }
}
