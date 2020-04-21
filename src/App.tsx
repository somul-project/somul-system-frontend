import React from 'react';
import Landing from 'frameworks/web/components/pages/Landing/Landing';
import { Helmet } from 'react-helmet';
import 'react-app-polyfill/ie11';
import 'react-app-polyfill/stable';

function App() {
  return (
    <div>
      <Helmet>
        <meta property="og:title" content="5월, 소프트웨어에 물들다." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://www.somul.kr" />
        <meta property="og:image" content="https://www.somul.kr/illust/somul-opengraph.png" />
        <meta property="og:description" content="전국의 도서관에서 소프트웨어를 주제로 한날 한시에 진행되는 강연 프로젝트입니다." />
      </Helmet>
      <Landing />
    </div>
  );
}

export default App;
