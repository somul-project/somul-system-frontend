import React from 'react';
import { useHistory } from 'react-router';

import theme from 'theme';
import * as ROUTES from 'utils/routes';

import SingleCard from 'frameworks/web/components/molecules/SingleCard/SingleCard';
import Label from 'frameworks/web/components/atoms/Label/Label';

export default function SpeakerApplyComplete(): React.ReactElement {
  const history = useHistory();

  const goStatus = () => {
    history.push(ROUTES.STATUS);
  };

  return (
    <SingleCard
      title="신청이 완료되었습니다!"
      buttonLabel={['신청현황']}
      buttonOnClick={[goStatus]}
    >
      <Label type="P1" color={theme.color.secondary.Moon}>
        승인 완료 현황은
      </Label>
      <div style={{ display: 'flex', width: '414px', margin: '0 auto' }}>
        <Label type="P1" color={theme.color.secondary.Moon}>
          우측 상단의
        </Label>
        <Label type="P1" color={theme.color.primary.White}>
          -
        </Label>
        <Label type="P1" color={theme.color.primary.Azure}>
          마이페이지 &gt; 신청현황
        </Label>
        <Label type="P1" color={theme.color.secondary.Moon}>
          에서 확인하실 수 있습니다.
        </Label>
      </div>
    </SingleCard>
  );
}
