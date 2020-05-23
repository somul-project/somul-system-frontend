import React from 'react';
import styled from 'styled-components';
import { useHistory } from 'react-router';

import theme from 'theme';
import Label from 'frameworks/web/components/atoms/Label/Label';
import ContentsBox from 'frameworks/web/components/atoms/ContentsBox/ContentsBox';
import SignButton from 'frameworks/web/components/atoms/SignButton/SignButton';
import { SERVER_URL } from 'utils/constants';
import * as ROUTES from 'utils/routes';
import useCurrentSession from 'frameworks/web/hooks/CurrentSessionHook';

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
  const history = useHistory();
  const [, , revokeSession] = useCurrentSession();

  const googleSignUp = () => {
    window.location.href = `${SERVER_URL}/auth/google`;
  };

  const githubSignUp = () => {
    window.location.href = `${SERVER_URL}/auth/github`;
  };

  const emailSignUp = () => {
    revokeSession(false);
    history.push(ROUTES.SIGN_UP_START);
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
        <SignButton siteType="email" buttonType="signup" onClick={emailSignUp} />
      </SignButtonContainer>
    </SignInContainer>
  );
}
