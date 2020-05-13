import 'react-app-polyfill/ie11';
import 'react-app-polyfill/stable';

import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { ApolloProvider } from '@apollo/client';
import Header from 'frameworks/web/components/organisms/Header/Header';
import Landing from 'frameworks/web/components/pages/Landing/Landing';
import SignIn from 'frameworks/web/components/pages/SignIn/SignIn';
import SignUp from 'frameworks/web/components/pages/SignUp/SignUp';
import Footer from 'frameworks/web/components/organisms/Footer/Footer';
import SpeakerApply from 'frameworks/web/components/pages/SpeakerApply/SpeakerApply';

import apolloClient, { initStorage } from 'frameworks/web/apollo';
import Loading from 'frameworks/web/components/atoms/Loading/Loading';
import { ROUTE_APPLY_SPEAKER, ROUTE_HOME, ROUTE_SIGN_IN, ROUTE_SIGN_UP } from 'utils/constants';

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
            <Route exact path={ROUTE_HOME}>
              <Landing />
            </Route>
            <Route path={ROUTE_SIGN_IN}>
              <SignIn />
            </Route>
            <Route path={ROUTE_SIGN_UP}>
              <SignUp />
            </Route>
            <Route path={ROUTE_APPLY_SPEAKER}>
              <SpeakerApply email="test@somul.kr" name="테스트" />
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
