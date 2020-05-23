import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';

import theme from 'theme';
import SingleCard from 'frameworks/web/components/molecules/SingleCard/SingleCard';
import Label from 'frameworks/web/components/atoms/Label/Label';
import Modal from 'frameworks/web/components/molecules/Modal/Modal';

import SomulLogo from 'assets/logo/logo.svg';
import apolloClient from 'frameworks/web/apollo';
import Loading from 'frameworks/web/components/atoms/Loading/Loading';
import { RESEND_EMAIL } from 'service/graphql/rest/SignUpQuery';
import { TEMP_EMAIL_VERIFY_PENDING } from 'utils/constants';

export default function SignUpComplete(): React.ReactElement {
  const location = useLocation();

  const [email, setEmail] = useState('');
  const [isLoading, setLoading] = useState(false);
  const [isAlert, setAlert] = useState(false);
  const [alertDescription, setAlertDescription] = useState('');

  const openAlert = (description: string) => {
    setAlert(true);
    setAlertDescription(description);
  };

  useEffect(() => {
    // @ts-ignore
    setEmail(location.state.email);
    window.localStorage.setItem(TEMP_EMAIL_VERIFY_PENDING, 'true');
  }, []);

  const resendEmail = async () => {
    setLoading(true);

    try {
      const result = await apolloClient.query({ query: RESEND_EMAIL, fetchPolicy: 'no-cache' });

      setLoading(false);

      if (result.data.result.statusCode !== '0') {
        openAlert(result.data.result.errorMessage);
      } else {
        openAlert('');
      }
    } catch (e) {
      openAlert('계속 되지 않을 경우, 소물 팀에 문의 부탁드립니다!');
      setLoading(false);
    }
  };

  const gotoHome = () => {
    window.location.replace('/');
  };

  return (
    <>
      <SingleCard
        title="인증메일이 전송되었습니다!"
        buttonLabel={['재전송', '확인']}
        buttonOnClick={[resendEmail, gotoHome]}
      >
        <Label type="H3">{email}</Label>
        <Label type="P1" color={theme.color.secondary.Moon} style={{ marginTop: '24px' }}>
          위 주소로 인증메일이 전송되었습니다.
        </Label>
        <Label type="P1" color={theme.color.secondary.Moon}>
          메일 확인 후, 회원가입을 완료해주세요.
        </Label>
      </SingleCard>
      {isLoading && <Loading />}
      <Modal type="empty" isOpen={isAlert} onClose={() => setAlert(false)}>
        <img src={SomulLogo} alt="소물 로고" style={{ width: '112.5px', height: '20px' }} />
        <Label
          type="H4"
          color={theme.color.primary.Azure}
          style={{
            padding: '48px 0 16px 0',
            paddingBottom: alertDescription !== '' ? '16px' : '48px',
          }}
        >
          {alertDescription === '' ? '이메일을 전송했어요!' : '이메일을 보내는데에 실패했어요 :('}
        </Label>
        {alertDescription !== '' && (
          <Label type="P1" style={{ paddingBottom: '48px' }}>
            {alertDescription}
          </Label>
        )}
      </Modal>
    </>
  );
}
