import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

import theme from 'theme';
import Label from 'frameworks/web/components/atoms/Label/Label';
import ContentsBox from 'frameworks/web/components/atoms/ContentsBox/ContentsBox';
import SignButton from 'frameworks/web/components/atoms/SignButton/SignButton';
import { SERVER_URL } from 'utils/constants';

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

export default function SignUpCard(): React.ReactElement {
  const googleSignUp = () => {
    const win = window.open(`${SERVER_URL}/auth/google`, '_blank');
    win!.focus();
  };

  const githubSignUp = () => {
    const win = window.open(`${SERVER_URL}/auth/github`, '_blank');
    win!.focus();
  };

  return (
    <SignInContainer isDarkBackground>
      <Label type="H4" color={theme.color.primary.Azure} style={{ textAlign: 'center' }}>
        SIGN UP
      </Label>
      <SignButtonContainer>
        <div style={{ marginBottom: '24px' }}>
          <SignButton siteType="google" buttonType="signup" onClick={googleSignUp} />
        </div>
        <div style={{ marginBottom: '24px' }}>
          <SignButton siteType="github" buttonType="signup" onClick={githubSignUp} />
        </div>
        <Link to="/signup">
          <SignButton siteType="email" buttonType="signup" onClick={() => undefined} />
        </Link>
      </SignButtonContainer>
    </SignInContainer>
  );
}
