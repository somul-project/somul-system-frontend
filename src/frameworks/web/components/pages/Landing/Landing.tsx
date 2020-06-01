import React, { useEffect, useState } from 'react';
import scrollIntoView from 'smooth-scroll-into-view-if-needed';
import LandingBanner from 'frameworks/web/components/organisms/Landing/LandingBanner';
import LandingAbout from 'frameworks/web/components/organisms/Landing/LandingAbout';
import LandingJoin from 'frameworks/web/components/organisms/Landing/LandingJoin';
import LandingSponsor from 'frameworks/web/components/organisms/Landing/LandingSponsor';
import Label from 'frameworks/web/components/atoms/Label/Label';
import theme from 'theme';
import Modal from 'frameworks/web/components/molecules/Modal/Modal';

import SomulLogo from 'assets/logo/logo.svg';
import { useLocation, useHistory } from 'react-router';
import { TEMP_EMAIL_VERIFY_PENDING, ERROR_MESSAGE } from 'utils/constants';

export default function Landing(): React.ReactElement {
  const { state } = useLocation();
  const history = useHistory();

  const [isModalOpened, setModalOpened] = useState(false);
  const [modalTitle, setModalTitle] = useState('');
  const [modalDescription, setModalDescription] = useState('');

  const handleModalClose = () => {
    setModalOpened(false);

    if (state && state.oAuthComplete) {
      delete state.oAuthComplete;
    }

    history.replace('/', state);
    window.localStorage.clear();
  };

  useEffect(() => {
    const gotoFromQueryString = new URLSearchParams(window.location.search).get('goto');
    if (gotoFromQueryString && gotoFromQueryString !== '') {
      const element = document.getElementById(gotoFromQueryString);
      if (element) scrollIntoView(element, { block: 'start' });
    }

    if (state && state.oAuthComplete) {
      setModalOpened(true);
      setModalTitle('회원가입이 완료되었습니다!');
      setModalDescription(
        `소셜 계정으로 회원가입이 완료되었어요!<br>소프트웨어에 물들다에 가입하신 걸 환영합니다!`,
      );
    }

    const tempEmailVerifyStatus = window.localStorage.getItem(TEMP_EMAIL_VERIFY_PENDING);
    if (tempEmailVerifyStatus && tempEmailVerifyStatus === 'true') {
      const statusCode = new URLSearchParams(window.location.search).get('statusCode');

      if (statusCode) {
        setModalOpened(true);

        if (statusCode === '0') {
          setModalTitle('메일 인증이 완료되었습니다!');
          setModalDescription('소프트웨어에 물들다에 가입하신 걸 환영합니다!');
        } else {
          setModalTitle('메일 인증을 실패했어요 :(');
          setModalDescription(ERROR_MESSAGE[parseInt(statusCode, 10)]);
        }
      }
    }
  }, []);

  return (
    <div>
      <LandingBanner />
      <LandingAbout />
      <LandingJoin />
      <LandingSponsor />
      <Modal type="empty" isOpen={isModalOpened} onClose={handleModalClose}>
        <img src={SomulLogo} alt="소물 로고" style={{ width: '112.5px', height: '20px' }} />
        <Label type="H4" color={theme.color.primary.Azure} style={{ padding: '48px 0 16px 0' }}>
          {modalTitle}
        </Label>
        <Label
          type="P1"
          style={{ paddingBottom: '48px' }}
          dangerouslySetInnerHTML={{ __html: modalDescription }}
        />
      </Modal>
    </div>
  );
}
