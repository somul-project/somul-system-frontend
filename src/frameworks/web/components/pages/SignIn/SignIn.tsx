import React from 'react';
import styled from 'styled-components';
import { Route } from 'react-router-dom';
import theme from 'theme';
import SignInCard from 'frameworks/web/components/organisms/SignIn/SignInCard';
import ForgotPassword from 'frameworks/web/components/organisms/SignIn/ForgotPassword';
import ForgotComplete from 'frameworks/web/components/organisms/SignIn/ForgotComplete';
import ChangePassword from 'frameworks/web/components/organisms/SignIn/ChangePassword';
import ChangeComplete from 'frameworks/web/components/organisms/SignIn/ChangeComplete';
import * as ROUTES from 'utils/routes';

const SignInContainer = styled.div`
  padding: 202px 0 120px 0;
  background-color: ${theme.color.secondary.Ash};
  height: auto;
  min-height: calc(100vh - 163px);
  display: flex;
  align-items: center;
  justify-content: center;
`;

export default class SignIn extends React.PureComponent {
  render() {
    return (
      <SignInContainer>
        <Route exact path={ROUTES.SIGN_IN}>
          <SignInCard />
        </Route>
        <Route path={ROUTES.SIGN_IN_FORGOT_PASSWORD}>
          <ForgotPassword />
        </Route>
        <Route path={ROUTES.SIGN_IN_FORGOT_COMPLETE}>
          <ForgotComplete />
        </Route>
        <Route path={ROUTES.SIGN_IN_CHANGE_PASSWORD}>
          <ChangePassword />
        </Route>
        <Route path={ROUTES.SIGN_IN_CHANGE_PASSWORD_COMPLETE}>
          <ChangeComplete />
        </Route>
      </SignInContainer>
    );
  }
}
