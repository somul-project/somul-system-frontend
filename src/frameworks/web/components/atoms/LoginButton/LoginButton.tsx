import styled from 'styled-components';
import theme from 'theme';
import React from 'react';
// eslint-disable-next-line no-unused-vars
import { ILoginButton } from 'interfaces/frameworks/web/components/atoms/LoginButton/ILoginButton';

const LoginButtonContainer = styled.div`
  background-color: ${theme.color.primary.White};
  color: ${theme.color.secondary.Moon} !important;
  outline: none;
  cursor: pointer;
  border-radius: 10px;
  border: solid 1px ${theme.color.secondary.Ash};
  transition: all 0.2s;
  width: 255px;
  height: 56px;
  
  @media (hover: hover) {
    &:hover {
      background-color: ${theme.color.secondary.Snow};
    }
  }
`;

const LoginButtonImg = styled.img`
  width: 32px;
  height: 32px;
  margin: 11px 0px 11px 19px;
  float: left;
`;

const LoginButtonLabel = styled.p`
  font-family: 'Muli', 'Noto Sans KR', sans-serif;
  font-size: 14px;
  margin: 17px 27px 17px 0px;
  float: right;
`;

export default class Button extends React.PureComponent<ILoginButton> {
  render() {
    const {
      type, onClick,
    } = this.props;

    return (
      <LoginButtonContainer onClick={() => onClick()}>
        <LoginButtonImg src={`logo/${type}.svg`} />
        <LoginButtonLabel>
          {type === 'google' ? 'Google' : 'Github'}
          {' '}
          계정으로 로그인
        </LoginButtonLabel>
      </LoginButtonContainer>
    );
  }
}