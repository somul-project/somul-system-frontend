import React from 'react';
import styled from 'styled-components';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import theme from 'theme';
import SignInCard from 'frameworks/web/components/organisms/SignIn/SignInCard';
import ForgotPassword from 'frameworks/web/components/organisms/SignIn/ForgotPassword';
import ForgotComplete from 'frameworks/web/components/organisms/SignIn/ForgotComplete';
import ChangePassword from 'frameworks/web/components/organisms/SignIn/ChangePassword';
import ChangeComplete from 'frameworks/web/components/organisms/SignIn/ChangeComplete';
import {
  ROUTE_SIGN_IN,
  ROUTE_SIGN_IN_CHANGE_PASSWORD,
  ROUTE_SIGN_IN_CHANGE_PASSWORD_COMPLETE,
  ROUTE_SIGN_IN_FORGOT_COMPLETE,
  ROUTE_SIGN_IN_FORGOT_PASSWORD,
} from 'utils/constants';

const SignInContainer = styled.div`
  padding: 120px 0;
  background-color: ${theme.color.secondary.Ash};
`;

export default class SignIn extends React.PureComponent {
  render() {
    return (
      <Router>
        <SignInContainer>
          <Switch>
            <Route exact path={ROUTE_SIGN_IN}>
              <SignInCard />
            </Route>
            <Route path={ROUTE_SIGN_IN_FORGOT_PASSWORD}>
              <ForgotPassword />
            </Route>
            <Route path={ROUTE_SIGN_IN_FORGOT_COMPLETE}>
              <ForgotComplete />
            </Route>
            <Route path={ROUTE_SIGN_IN_CHANGE_PASSWORD}>
              <ChangePassword />
            </Route>
            <Route path={ROUTE_SIGN_IN_CHANGE_PASSWORD_COMPLETE}>
              <ChangeComplete />
            </Route>
          </Switch>
        </SignInContainer>
      </Router>
    );
  }
}
