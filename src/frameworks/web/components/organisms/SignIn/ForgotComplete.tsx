import React from 'react';
import theme from 'theme';
import SingleCard from 'frameworks/web/components/molecules/SingleCard/SingleCard';
import Label from 'frameworks/web/components/atoms/Label/Label';

export default class ForgotComplete extends React.PureComponent {
  resend = () => {
    // eslint-disable-next-line no-undef, no-alert
    alert('재전송 버튼 누름');
  };

  goHome = () => {
    // eslint-disable-next-line no-undef
    window.location.href = '/';
  };

  render() {
    return (
      <SingleCard
        title="메일이 전송되었습니다!"
        buttonLabel={['재전송', '확인']}
        buttonOnClick={[this.resend, this.goHome]}
      >
        <Label type="H3" mark="underline" markColor="#45A4F699">
          example@google.com
        </Label>
        <Label type="P1" color={theme.color.secondary.Moon} style={{ marginTop: '24px' }}>
          위 주소로 메일이 전송되었습니다.
        </Label>
        <Label type="P1" color={theme.color.secondary.Moon}>
          메일을 확인하여 새로운 비밀번호를 설정해주세요.
        </Label>
      </SingleCard>
    );
  }
}
