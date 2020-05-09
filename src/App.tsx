import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { ApolloProvider } from '@apollo/client';
import Header from 'frameworks/web/components/organisms/Header/Header';
import Landing from 'frameworks/web/components/pages/Landing/Landing';
import SignIn from 'frameworks/web/components/pages/SignIn/SignIn';
import SignUp from 'frameworks/web/components/pages/SignUp/SignUp';
import Footer from 'frameworks/web/components/organisms/Footer/Footer';
import SpeakerApply from 'frameworks/web/components/pages/SpeakerApply/SpeakerApply';

import 'react-app-polyfill/ie11';
import 'react-app-polyfill/stable';
import apolloClient, { initStorage } from 'frameworks/web/apollo';
import Loading from './frameworks/web/components/atoms/Loading/Loading';

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
            <Route exact path="/" component={Landing} />
            <Route path="/signin" component={SignIn} />
            <Route path="/signup" component={SignUp} />
            <Route
              path="/apply/speaker"
              render={() => <SpeakerApply email="test@somul.kr" name="테스트" />}
            />
          </Switch>
          <Footer />
        </Router>
      </ApolloProvider>
    );
  }
  return <Loading />;
}

export default App;
