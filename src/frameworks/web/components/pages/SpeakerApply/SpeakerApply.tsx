import React from 'react';
import styled from 'styled-components';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import theme from 'theme';

import SpeakerApplyForm from 'frameworks/web/components/organisms/SpeakerApply/SpeakerApplyForm';
import SpeakerApplyComplete from 'frameworks/web/components/organisms/SpeakerApply/SpeakerApplyComplete';

import * as ROUTES from 'utils/routes';

const SpeakerApplyContainer = styled.div`
  padding: 202px 0 120px 0;
  background-color: ${theme.color.secondary.Ash};
`;

export default function SpeakerApplyPage(): React.ReactElement {
  return (
    <Router>
      <SpeakerApplyContainer>
        <Route exact path={ROUTES.APPLY_SPEAKER}>
          <SpeakerApplyForm />
        </Route>
        <Route exact path={ROUTES.APPLY_SPEAKER_COMPLETE}>
          <SpeakerApplyComplete />
        </Route>
      </SpeakerApplyContainer>
    </Router>
  );
}
