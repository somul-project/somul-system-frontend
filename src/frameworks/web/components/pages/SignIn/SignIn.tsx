import React from 'react';
import styled from 'styled-components';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import theme from 'theme';
import SignInCard from 'frameworks/web/components/organisms/SignIn/SignInCard';
import ForgotPassword from 'frameworks/web/components/organisms/SignIn/ForgotPassword';
import ForgotComplete from 'frameworks/web/components/organisms/SignIn/ForgotComplete';
import ChangePassword from 'frameworks/web/components/organisms/SignIn/ChangePassword';
import ChangeComplete from 'frameworks/web/components/organisms/SignIn/ChangeComplete';

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
            <Route exact path="/signin" component={SignInCard} />
            <Route path="/signin/forgot-password" component={ForgotPassword} />
            <Route path="/signin/forgot-complete" component={ForgotComplete} />
            <Route path="/signin/change-password" component={ChangePassword} />
            <Route path="/signin/change-complete" component={ChangeComplete} />
          </Switch>
        </SignInContainer>
      </Router>
    );
  }
}
