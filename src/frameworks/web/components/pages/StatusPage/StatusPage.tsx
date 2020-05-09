import React from 'react';
import styled from 'styled-components';
import theme from 'theme';
import Label from 'frameworks/web/components/atoms/Label/Label';
import Button from 'frameworks/web/components/atoms/Button/Button';
import ContentsBox from 'frameworks/web/components/atoms/ContentsBox/ContentsBox';
import { IStatusPage } from 'interfaces/frameworks/web/components/pages/StatusPage/IStatusPage';

const StatusContainer = styled.div`
  padding: 160px 85px 120px 85px;
  background-color: ${theme.color.secondary.Ash};
  text-align: center;
`;

const StatusContentContainer = styled(ContentsBox)`
  margin-top: 80px;
  width: 100%;
`;

const NoStatusContainer = styled.div`
  padding: 120px 0;
`;

export default function StatusPage({ isApply = false }: IStatusPage): React.ReactElement {
  const linkToApply = () => {
    // eslint-disable-next-line no-undef
    window.location.href = '/apply/speaker';
  };
  return (
    <StatusContainer>
      <Label type="H3" color={theme.color.primary.Azure}>
        나의 신청현황
      </Label>
      <StatusContentContainer isDarkBackground>
        {!isApply && (
          <NoStatusContainer>
            <Label type="P1" color={theme.color.secondary.Moon} style={{ paddingBottom: '45px' }}>
              신청하신 강연이 없습니다.
            </Label>
            <Button label="신청하기" onClick={linkToApply} />
          </NoStatusContainer>
        )}
      </StatusContentContainer>
    </StatusContainer>
  );
}
