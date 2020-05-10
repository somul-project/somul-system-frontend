import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from 'frameworks/web/redux/store';
import Header from 'frameworks/web/components/organisms/Header/Header';
import Landing from 'frameworks/web/components/pages/Landing/Landing';
import SignIn from 'frameworks/web/components/pages/SignIn/SignIn';
import SignUp from 'frameworks/web/components/pages/SignUp/SignUp';
import Footer from 'frameworks/web/components/organisms/Footer/Footer';
import SpeakerApply from 'frameworks/web/components/pages/SpeakerApply/SpeakerApply';
import Profile from 'frameworks/web/components/pages/Profile/Profile';

import 'react-app-polyfill/ie11';
import 'react-app-polyfill/stable';

function App() {
  return (
    <Provider store={store}>
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
          <Route
            path="/profile"
            render={() => <Profile email="test@somul.kr" name="테스트" phone="010-1234-5678" />}
          />
        </Switch>
        <Footer />
      </Router>
    </Provider>
  );
}

export default App;
