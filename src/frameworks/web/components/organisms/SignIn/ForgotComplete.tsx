import React from 'react';
import { useHistory, useLocation } from 'react-router';

import theme from 'theme';
import SingleCard from 'frameworks/web/components/molecules/SingleCard/SingleCard';
import Label from 'frameworks/web/components/atoms/Label/Label';
import { IForgotState as IForgotLocation } from '../../../../../interfaces/frameworks/web/components/organisms/SignIn/IForgot';

export default function ForgotComplete(): React.ReactElement {
  const {
    state: { email },
  } = useLocation<IForgotLocation>();
  const history = useHistory();

  const goHome = () => {
    history.push('/');
  };

  const resend = () => {
    //  TODO: 재전송 버튼 눌렀을 때 액션 추가
  };

  return (
    <SingleCard
      title="메일이 전송되었습니다!"
      buttonLabel={['재전송', '확인']}
      buttonOnClick={[resend, goHome]}
    >
      <Label type="H3" mark="underline" markColor="#45A4F699">
        {email}
      </Label>
      <Label type="P1" color={theme.color.secondary.Moon} style={{ marginTop: '24px' }}>
        위 주소로 메일이 전송 되었습니다.
      </Label>
      <Label type="P1" color={theme.color.secondary.Moon}>
        메일을 확인하여 새로운 비밀번호를 설정해주세요.
      </Label>
    </SingleCard>
  );
}
