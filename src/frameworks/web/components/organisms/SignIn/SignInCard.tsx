/* eslint-disable react/no-unused-state */
/* eslint-disable no-undef */
/* eslint-disable no-alert */
import React from 'react';
import styled from 'styled-components';
import theme from 'theme';
import { Link } from 'react-router-dom';
import Label from 'frameworks/web/components/atoms/Label/Label';
import ContentsBox from 'frameworks/web/components/atoms/ContentsBox/ContentsBox';
import TextField from 'frameworks/web/components/atoms/TextField/TextField';
import Button from 'frameworks/web/components/atoms/Button/Button';
import SignButton from 'frameworks/web/components/atoms/SignButton/SignButton';
// eslint-disable-next-line no-unused-vars
import { ISignInData } from 'interfaces/utils/user/IUserService';
import { SERVER_URL } from 'utils/constants';

const SignInContainer = styled(ContentsBox)`
  width: 730px;
  margin: 0 auto;
  padding: 64px 95px;
`;

const SignInFormContainer = styled.div`
  width: 350px;
  margin: 40px auto;
`;

const ForgotContainer = styled.div`
  margin: 0 4px;
  float: right;
  display: flex;
`;

const BlockContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 16px;
`;

const SingleLine = styled.div`
  width: 214px;
  height: 1px;
  background-color: ${theme.color.secondary.Ash};
`;

const SignButtonContainer = styled.div`
  width: 350px;
  margin: 0 auto;
`;

export default class SignInCard extends React.PureComponent<{}, ISignInData> {
  constructor(props: Readonly<{}>) {
    super(props);
    this.state = {
      email: '',
      password: '',
    };
  }

  login = async () => {
    // const signinPayload = this.state;
    // const valCheck = UserService.signInValidationCheck(signinPayload);
    // if (valCheck !== true) {
    //   alert(valCheck);
    //   return;
    // }
    // const signUpResult = await UserService.sendSignInData(signinPayload);
    // if (signUpResult === '0') {
    //   window.location.href = '/';
    // } else {
    //   alert(ERROR_MESSAGE[signUpResult] ?? ERROR_MESSAGE['500']);
    // }
  };

  googleLogin = () => {
    window.location.href = `${window.location.protocol}//${SERVER_URL}/auth/google`;
  };

  githubLogin = () => {
    window.location.href = `${window.location.protocol}//${SERVER_URL}/auth/github`;
  };

  render() {
    return (
      <SignInContainer isDarkBackground>
        <Label type="H4" color={theme.color.primary.Azure} style={{ textAlign: 'center' }}>
          SIGN IN
        </Label>
        <SignInFormContainer>
          <TextField
            defaultLabel="이메일을 입력하세요"
            onValueChange={(value) => this.setState({ email: value })}
            style={{ width: 'auto', margin: '8px 0' }}
          />
          <TextField
            type="password"
            defaultLabel="비밀번호를 입력하세요"
            onValueChange={(value) => this.setState({ password: value })}
            style={{ width: 'auto', margin: '8px 0' }}
          />
          <ForgotContainer>
            <Label type="P2" color={theme.color.secondary.Moon}>
              비밀번호를 잊으셨나요?
            </Label>
            <Link to="/signin/forgot-password" style={{ textDecoration: 'none' }}>
              <Label type="P2" color={theme.color.primary.Azure} style={{ marginLeft: '16px' }}>
                비밀번호 변경
              </Label>
            </Link>
          </ForgotContainer>
          <div style={{ padding: '32px 0 0 0', clear: 'right' }}>
            <Button type="wide" label="로그인하기" isPrimary onClick={this.login} />
          </div>
        </SignInFormContainer>
        <BlockContainer>
          <SingleLine />
          <Label type="P2" color={theme.color.secondary.Moon}>
            or
          </Label>
          <SingleLine />
        </BlockContainer>
        <SignButtonContainer>
          <div style={{ marginBottom: '24px' }}>
            <SignButton siteType="google" buttonType="signin" onClick={this.googleLogin} />
          </div>
          <SignButton siteType="github" buttonType="signin" onClick={this.githubLogin} />
        </SignButtonContainer>
      </SignInContainer>
    );
  }
}
