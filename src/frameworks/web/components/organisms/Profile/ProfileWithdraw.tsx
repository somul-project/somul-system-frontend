import React from 'react';
import theme from 'theme';
import SingleCard from 'frameworks/web/components/molecules/SingleCard/SingleCard';
import Label from 'frameworks/web/components/atoms/Label/Label';

const onCancleButtonClicked = () => {
  // 취소 버튼 클릭 로직 추가 : /profile로 이동
};

const onDeleteButtonClicked = () => {
  // 계정 삭제 로직 추가
};

const ProfileWithdraw = () => {
  return (
    <SingleCard
      title="계정 삭제"
      buttonLabel={['취소', '삭제하기']}
      buttonOnClick={[onCancleButtonClicked, onDeleteButtonClicked]}
    >
      <Label type="P1" color={theme.color.secondary.Moon} style={{ marginTop: '24px' }}>
        계정을 삭제하시면 해당 홈페이지와 관련된 서비스를 이용할 수 없으며,
      </Label>
      <Label type="P1" color={theme.color.secondary.Moon}>
        작성중인 신청폼이 모두 없어집니다. 계정을 삭제 하시겠습니까?
      </Label>
    </SingleCard>
  );
};

export default ProfileWithdraw;
