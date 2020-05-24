import 'react-app-polyfill/ie11';
import 'react-app-polyfill/stable';

import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { ApolloProvider } from '@apollo/client';

import Loading from 'frameworks/web/components/atoms/Loading/Loading';
import Footer from 'frameworks/web/components/organisms/Footer/Footer';
import Header from 'frameworks/web/components/organisms/Header/Header';
import SpeakerApplyPage from 'frameworks/web/components/pages/SpeakerApply/SpeakerApply';
import ProfilePage from 'frameworks/web/components/pages/Profile/Profile';
import LandingPage from 'frameworks/web/components/pages/Landing/Landing';
import SignInPage from 'frameworks/web/components/pages/SignIn/SignIn';
import SignUpPage from 'frameworks/web/components/pages/SignUp/SignUp';
import StatusPage from 'frameworks/web/components/pages/StatusPage/StatusPage';

import apolloClient, { initStorage } from 'frameworks/web/apollo';
import * as ROUTES from 'utils/routes';

function App() {
  const [isLoaded, setLoaded] = useState(false);

  useEffect(() => {
    initStorage().then(() => {
      setLoaded(true);
    });
  }, []);

  if (isLoaded) {
    return (
      // @ts-ignore
      <ApolloProvider client={apolloClient}>
        <Router>
          <Header />
          <Switch>
            <Route exact path={ROUTES.HOME}>
              <LandingPage />
            </Route>
            <Route path={ROUTES.SIGN_IN}>
              <SignInPage />
            </Route>
            <Route path={ROUTES.SIGN_UP}>
              <SignUpPage />
            </Route>
            <Route path={ROUTES.APPLY_SPEAKER}>
              <SpeakerApplyPage />
            </Route>
            <Route path={ROUTES.STATUS}>
              <StatusPage />
            </Route>
            <Route path={ROUTES.PROFILE}>
              <ProfilePage />
            </Route>
          </Switch>
          <Footer />
        </Router>
      </ApolloProvider>
    );
  }
  return <Loading />;
}

export default App;
