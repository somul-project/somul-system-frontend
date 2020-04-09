import React from 'react';
import styled from 'styled-components';
import theme from 'theme';
import { Link } from 'react-router-dom';
import Label from 'frameworks/web/components/atoms/Label/Label';
import ContentsBox from 'frameworks/web/components/atoms/ContentsBox/ContentsBox';
import TextField from 'frameworks/web/components/atoms/TextField/TextField';
import Button from 'frameworks/web/components/atoms/Button/Button';
import LoginButton from 'frameworks/web/components/atoms/LoginButton/LoginButton';
// eslint-disable-next-line no-unused-vars
import { ISignInCardState } from 'interfaces/frameworks/web/components/organisms/SignIn/ISignInCard';

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
`;

const SingleLine = styled.div`
  width: 214px;
  height: 1px;
  background-color: ${theme.color.secondary.Ash};
`;

export default class SignInCard extends React.PureComponent<{}, ISignInCardState> {
  constructor(props: Readonly<{}>) {
    super(props);
    this.state = {
      email: '',
      password: '',
    };
  }

  login = () => {
    const { email, password } = this.state;
    // eslint-disable-next-line no-undef, no-alert
    alert(`test : ${email} / ${password}`);
  };

  googleLogin = () => undefined;

  githubLogin = () => undefined;

  render() {
    return (
      <SignInContainer isDarkBackground>
        <Label type="H4" color={theme.color.primary.Azure} style={{ textAlign: 'center' }}>SIGN IN</Label>
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
            <Label type="P2" color={theme.color.secondary.Moon}>비밀번호를 잊으셨나요?</Label>
            <Link to="/signin/forgot" style={{ textDecoration: 'none' }}>
              <Label
                type="P2"
                color={theme.color.primary.Azure}
                style={{ marginLeft: '16px' }}
              >
                비밀번호 변경
              </Label>
            </Link>
          </ForgotContainer>
          <div style={{ padding: '32px 0 0 0', clear: 'right' }}>
            <Link to="/">
              <Button type="wide" label="로그인하기" isPrimary onClick={this.login} />
            </Link>
          </div>
        </SignInFormContainer>
        <BlockContainer>
          <SingleLine />
          <Label type="P2" color={theme.color.secondary.Moon}>or</Label>
          <SingleLine />
        </BlockContainer>
        <BlockContainer style={{ marginTop: '24px' }}>
          <Link to="/">
            <LoginButton type="google" onClick={this.googleLogin} />
          </Link>
          <Link to="/">
            <LoginButton type="github" onClick={this.githubLogin} />
          </Link>
        </BlockContainer>
      </SignInContainer>
    );
  }
}
