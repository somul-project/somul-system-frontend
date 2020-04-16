import React from 'react';
import styled from 'styled-components';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import theme from 'theme';
import SignUpNow from '../../organisms/SignUp/SignUpNow';
import SignUpComplete from '../../organisms/SignUp/SignUpComplete';
import SignUpCard from '../../organisms/SignUp/SignUpCard';

const SignUpContainer = styled.div`
  padding: 120px 0;
  background-color: ${theme.color.secondary.Ash};
`;

export default class SignIn extends React.PureComponent {
  render() {
    return (
      <Router>
        <SignUpContainer>
          <Switch>
            <Route exact path="/signup" component={SignUpNow} />
            <Route path="/signup/start" component={SignUpCard} />
            <Route path="/signup/complete" component={SignUpComplete} />
          </Switch>
        </SignUpContainer>
      </Router>
    );
  }
}
