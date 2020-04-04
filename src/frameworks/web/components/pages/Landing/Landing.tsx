import React from 'react';
import Header from 'frameworks/web/components/organisms/Header/Header';
import LandingBanner from 'frameworks/web/components/organisms/Landing/LandingBanner';
import LandingAbout from 'frameworks/web/components/organisms/Landing/LandingAbout';
import LandingJoin from 'frameworks/web/components/organisms/Landing/LandingJoin';
import LandingSponsor from 'frameworks/web/components/organisms/Landing/LandingSponsor';
import Footer from 'frameworks/web/components/organisms/Footer/Footer';

export default class Landing extends React.PureComponent {
  render() {
    return (
      <div>
        <Header />
        <LandingBanner />
        <LandingAbout />
        <LandingJoin />
        <LandingSponsor />
        <Footer />
      </div>
    );
  }
}
