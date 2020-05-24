import React from 'react';
import styled from 'styled-components';
import { Route } from 'react-router-dom';
import theme from 'theme';
import ProfileInfo from 'frameworks/web/components/organisms/Profile/ProfileInfo';
import ProfileWithdraw from 'frameworks/web/components/organisms/Profile/ProfileWithdraw';
import * as ROUTES from 'utils/routes';

const ProfileContainer = styled.div`
  padding: 200px 0 120px 0;
  background-color: ${theme.color.secondary.Ash};
`;

export default function Profile(): React.ReactElement {
  return (
    <ProfileContainer>
      <Route exact path={ROUTES.PROFILE}>
        <ProfileInfo />
      </Route>
      <Route path={ROUTES.PROFILE_WITHDRAW}>
        <ProfileWithdraw />
      </Route>
    </ProfileContainer>
  );
}
