/* eslint-disable no-undef */
import React from 'react';
import styled from 'styled-components';
import theme from 'theme';
import { Link } from 'react-router-dom';
import Label from 'frameworks/web/components/atoms/Label/Label';
import ContentsBox from 'frameworks/web/components/atoms/ContentsBox/ContentsBox';
import SignButton from 'frameworks/web/components/atoms/SignButton/SignButton';

const SignInContainer = styled(ContentsBox)`
  width: 730px;
  margin: 0 auto;
  padding: 64px 95px;
`;

const SignButtonContainer = styled.div`
  padding-top: 48px;
  width: 350px;
  margin: 0 auto;
`;

export default class SignUpCard extends React.PureComponent {
  googleSignUp = () => {
    const win = window.open(`${process.env.REACT_APP_SERVER_URL}/auth/google`, '_blank');
    win!.focus();
  }

  githubSignUp = () => {
    const win = window.open(`${process.env.REACT_APP_SERVER_URL}/auth/github`, '_blank');
    win!.focus();
  }

  render() {
    return (
      <SignInContainer isDarkBackground>
        <Label type="H4" color={theme.color.primary.Azure} style={{ textAlign: 'center' }}>SIGN UP</Label>
        <SignButtonContainer>
          <div style={{ marginBottom: '24px' }}>
            <SignButton siteType="google" buttonType="signup" onClick={this.googleSignUp} />
          </div>
          <div style={{ marginBottom: '24px' }}>
            <SignButton siteType="github" buttonType="signup" onClick={this.githubSignUp} />
          </div>
          <Link to="/signup">
            <SignButton siteType="email" buttonType="signup" onClick={() => undefined} />
          </Link>
        </SignButtonContainer>
      </SignInContainer>
    );
  }
}
