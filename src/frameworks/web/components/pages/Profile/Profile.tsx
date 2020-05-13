import React from 'react';
import styled from 'styled-components';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import theme from 'theme';
import { IProfile } from 'interfaces/frameworks/web/components/pages/Profile/IProfile';
import ProfileInfo from 'frameworks/web/components/organisms/Profile/ProfileInfo';
import ProfileWithdraw from 'frameworks/web/components/organisms/Profile/ProfileWithdraw';
import { ROUTE_PROFILE, ROUTE_PROFILE_WITHDRAW } from 'utils/constants';

const ProfileContainer = styled.div`
  padding: 200px 0 120px 0;
  background-color: ${theme.color.secondary.Ash};
`;

export default function Profile({ name, email, phone }: IProfile): React.ReactElement {
  return (
    <Router>
      <ProfileContainer>
        <Switch>
          <Route exact path={ROUTE_PROFILE}>
            <ProfileInfo name={name} email={email} phone={phone} />
          </Route>
          <Route path={ROUTE_PROFILE_WITHDRAW}>
            <ProfileWithdraw />
          </Route>
        </Switch>
      </ProfileContainer>
    </Router>
  );
}
