import React from 'react';
import theme from 'theme';
import SingleCard from 'frameworks/web/components/molecules/SingleCard/SingleCard';
import Label from 'frameworks/web/components/atoms/Label/Label';

export default class ForgotComplete extends React.PureComponent {
  goLogin = () => {
    // eslint-disable-next-line no-undef
    window.location.href = '/signin';
  }

  render() {
    return (
      <SingleCard title="비밀번호 변경이 완료되었습니다!" buttonLabel={['로그인']} buttonOnClick={[this.goLogin]}>
        <Label type="P1" color={theme.color.secondary.Moon}>비밀번호 변경이 완료되었습니다.</Label>
        <Label type="P1" color={theme.color.secondary.Moon}>새로운 암호로 다시 로그인하세요.</Label>
      </SingleCard>
    );
  }
}
