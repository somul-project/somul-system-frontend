import React, { useEffect } from 'react';
import scrollIntoView from 'smooth-scroll-into-view-if-needed';
import LandingBanner from 'frameworks/web/components/organisms/Landing/LandingBanner';
import LandingAbout from 'frameworks/web/components/organisms/Landing/LandingAbout';
import LandingJoin from 'frameworks/web/components/organisms/Landing/LandingJoin';
import LandingSponsor from 'frameworks/web/components/organisms/Landing/LandingSponsor';

export default function Landing(): React.ReactElement {
  useEffect(() => {
    const gotoFromQueryString = new URLSearchParams(window.location.search).get('goto');
    if (gotoFromQueryString && gotoFromQueryString !== '') {
      const element = document.getElementById(gotoFromQueryString);
      if (element) scrollIntoView(element, { block: 'start' });
    }
  }, []);

  return (
    <div>
      <LandingBanner />
      <LandingAbout />
      <LandingJoin />
      <LandingSponsor />
    </div>
  );
}
