import React from 'react';
import theme from 'theme';
import SingleCard from 'frameworks/web/components/molecules/SingleCard/SingleCard';
import Label from 'frameworks/web/components/atoms/Label/Label';

export default class SpeakerApplyComplete extends React.PureComponent {
  goStatus = () => {
    // TODO: 추후 신청현황 페이지로 이동 기능 추가
    // eslint-disable-next-line no-undef
    window.location.href = '/';
  }

  render() {
    return (
      <SingleCard title="신청이 완료되었습니다!" buttonLabel={['신청현황']} buttonOnClick={[this.goStatus]}>
        <Label type="P1" color={theme.color.secondary.Moon}>승인 완료 현황은</Label>
        <div style={{ display: 'flex', width: '414px', margin: '0 auto' }}>
          <Label type="P1" color={theme.color.secondary.Moon}>우측 상단의</Label>
          <Label type="P1" color={theme.color.primary.White}>-</Label>
          <Label type="P1" color={theme.color.primary.Azure}>마이페이지 &gt; 신청현황</Label>
          <Label type="P1" color={theme.color.secondary.Moon}>에서 확인하실 수 있습니다.</Label>
        </div>
      </SingleCard>
    );
  }
}
