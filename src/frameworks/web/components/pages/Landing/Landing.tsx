import React from 'react';
import LandingBanner from 'frameworks/web/components/organisms/Landing/LandingBanner';
import LandingAbout from 'frameworks/web/components/organisms/Landing/LandingAbout';
import LandingJoin from 'frameworks/web/components/organisms/Landing/LandingJoin';
import LandingSponsor from 'frameworks/web/components/organisms/Landing/LandingSponsor';

export default class Landing extends React.PureComponent {
  render() {
    return (
      <div>
        <LandingBanner />
        <LandingAbout />
        <LandingJoin />
        <LandingSponsor />
      </div>
    );
  }
}
