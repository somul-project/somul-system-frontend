import React from 'react';
import styled from 'styled-components';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import theme from 'theme';
import SignUpNow from 'frameworks/web/components/organisms/SignUp/SignUpNow';
import SignUpComplete from 'frameworks/web/components/organisms/SignUp/SignUpComplete';
import SignUpCard from 'frameworks/web/components/organisms/SignUp/SignUpCard';
import * as ROUTES from 'utils/routes';

const SignUpContainer = styled.div`
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
      <Router>
        <SignUpContainer>
          <Switch>
            <Route exact path={ROUTES.SIGN_UP}>
              <SignUpNow />
            </Route>
            <Route path={ROUTES.SIGN_UP_START}>
              <SignUpCard />
            </Route>
            <Route path={ROUTES.SIGN_UP_COMPLETE}>
              <SignUpComplete />
            </Route>
          </Switch>
        </SignUpContainer>
      </Router>
    );
  }
}
