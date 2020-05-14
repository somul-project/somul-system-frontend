import React from 'react';
import { useHistory } from 'react-router';

import theme from 'theme';
import SingleCard from 'frameworks/web/components/molecules/SingleCard/SingleCard';
import Label from 'frameworks/web/components/atoms/Label/Label';

export default function ChangeComplete(): React.ReactElement {
  const history = useHistory();

  const goLogin = () => {
    history.push('/signin');
  };

  return (
    <SingleCard
      title="비밀번호 변경이 완료 되었습니다!"
      buttonLabel={['로그인']}
      buttonOnClick={[goLogin]}
    >
      <Label type="P1" color={theme.color.secondary.Moon}>
        비밀번호 변경이 완료되었습니다.
      </Label>
      <Label type="P1" color={theme.color.secondary.Moon}>
        새로운 암호로 다시 로그인하세요.
      </Label>
    </SingleCard>
  );
}
