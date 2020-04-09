import React from 'react';
import styled from 'styled-components';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import theme from 'theme';
import SignInCard from 'frameworks/web/components/organisms/SignIn/SignInCard';
import Forgot from 'frameworks/web/components/organisms/SignIn/Forgot';
import ForgotComplete from 'frameworks/web/components/organisms/SignIn/ForgotComplete';

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
            <Route path="/signin/forgot" component={Forgot} />
            <Route path="/signin/forgot-complete" component={ForgotComplete} />
          </Switch>
        </SignInContainer>
      </Router>
    );
  }
}
