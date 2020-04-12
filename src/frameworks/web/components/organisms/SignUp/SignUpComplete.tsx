import React from 'react';
import theme from 'theme';
import SingleCard from 'frameworks/web/components/molecules/SingleCard/SingleCard';
import Label from 'frameworks/web/components/atoms/Label/Label';
// eslint-disable-next-line no-unused-vars
import { RouteComponentProps } from 'react-router-dom';

const resend = () => {
  // eslint-disable-next-line no-undef, no-alert
  alert('재전송 버튼 누름');
};

const goHome = () => {
  // eslint-disable-next-line no-undef
  window.location.href = '/';
};

const SignUpComplete = (props: RouteComponentProps) => {
  const { location } = props;
  return (
    <SingleCard title="인증메일이 전송되었습니다!" buttonLabel={['재전송', '확인']} buttonOnClick={[resend, goHome]}>
      <Label type="H3">{new URLSearchParams(location.search).get('email')}</Label>
      <Label type="P1" color={theme.color.secondary.Moon} style={{ marginTop: '24px' }}>위 주소로 인증메일이 전송되었습니다.</Label>
      <Label type="P1" color={theme.color.secondary.Moon}>메일 확인 후, 회원가입을 완료해주세요.</Label>
    </SingleCard>
  );
};

export default SignUpComplete;
