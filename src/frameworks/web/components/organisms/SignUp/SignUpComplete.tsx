import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import theme from 'theme';
import SingleCard from 'frameworks/web/components/molecules/SingleCard/SingleCard';
import Label from 'frameworks/web/components/atoms/Label/Label';
import apolloClient from 'frameworks/web/apollo';
import Loading from 'frameworks/web/components/atoms/Loading/Loading';
import { RESEND_EMAIL } from 'service/graphql/rest/SignUpQuery';

export default function SignUpComplete(): React.ReactElement {
  const location = useLocation();

  const [email, setEmail] = useState('');
  const [isLoading, setLoading] = useState(false);

  useEffect(() => {
    // @ts-ignore
    setEmail(location.state.email);
  }, []);

  const resendEmail = async () => {
    setLoading(true);

    try {
      const result = await apolloClient.query({ query: RESEND_EMAIL, fetchPolicy: 'no-cache' });

      setLoading(false);

      if (result.data.result.statusCode !== '0') {
        // eslint-disable-next-line no-alert
        alert(`이메일을 보내는데에 실패했어요 :(\n${result.data.result.errorMessage}`);
      } else {
        // eslint-disable-next-line no-alert
        alert('이메일을 전송했어요!');
      }
    } catch (e) {
      // eslint-disable-next-line no-alert
      alert('이메일을 보내는데에 실패했어요 :( 계속 되지 않을 경우, 소물 팀에 문의 부탁드립니다!');
    }
  };

  const gotoHome = () => {
    window.location.replace('/');
  };

  return (
    <div>
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
    </div>
  );
}
