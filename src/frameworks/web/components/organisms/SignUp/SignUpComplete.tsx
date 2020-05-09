import React from 'react';
import theme from 'theme';
import SingleCard from 'frameworks/web/components/molecules/SingleCard/SingleCard';
import Label from 'frameworks/web/components/atoms/Label/Label';
// eslint-disable-next-line no-unused-vars
import { RouteComponentProps } from 'react-router-dom';
import UserService from 'utils/user';
import { ERROR_MESSAGE } from 'utils/constants';

const resend = async () => {
  const result = await UserService.requestResendEmail();
  // eslint-disable-next-line no-undef, no-alert
  alert(result === '0' ? '재전송되었습니다.' : ERROR_MESSAGE[result] ?? ERROR_MESSAGE['500']);
};

const goHome = () => {
  // eslint-disable-next-line no-undef
  window.location.href = '/';
};

const SignUpComplete = (props: RouteComponentProps) => {
  const { location } = props;
  return (
    <SingleCard
      title="인증메일이 전송되었습니다!"
      buttonLabel={['재전송', '확인']}
      buttonOnClick={[resend, goHome]}
    >
      <Label type="H3">{new URLSearchParams(location.search).get('email')}</Label>
      <Label type="P1" color={theme.color.secondary.Moon} style={{ marginTop: '24px' }}>
        위 주소로 인증메일이 전송되었습니다.
      </Label>
      <Label type="P1" color={theme.color.secondary.Moon}>
        메일 확인 후, 회원가입을 완료해주세요.
      </Label>
    </SingleCard>
  );
};

export default SignUpComplete;
