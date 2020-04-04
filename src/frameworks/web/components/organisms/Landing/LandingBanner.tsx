import React from 'react';
import styled from 'styled-components';
import theme from 'theme';
import Label from 'frameworks/web/components/atoms/Label/Label';
import Button from 'frameworks/web/components/atoms/Button/Button';

const BannerContainer = styled.div`
  height: 720px;
  min-width: 1280px;
  padding: 0 180px 0 110px;
  background-color: ${theme.color.primary.Azure};

  display: flex;
  justify-content: space-between;
`;

const BannerInfoContainer = styled.div`
  padding-top: 120px;
`;

const BannerInfoLabelContainer = styled.div`
  margin: 40px 0;
`;

const BannerMainIllust = styled.img`
  width: 589px;
  height: 526px;
  margin-top: 114px;
`;

const notYetAlert = () => {
  // eslint-disable-next-line no-undef, no-alert
  alert('추후 공개될 예정입니다.');
};

export default class LandingBanner extends React.PureComponent {
  render() {
    return (
      <BannerContainer>
        <BannerInfoContainer>
          <img src="main-contents-title.svg" alt="소프트웨어에 물들다" />
          <BannerInfoLabelContainer>
            <Label type="H4" color={theme.color.primary.White}>2020년 05월 30일 14:00 ~</Label>
          </BannerInfoLabelContainer>
          <Button isPrimary={false} label="자세히보기" onClick={notYetAlert} />
        </BannerInfoContainer>
        <BannerMainIllust src="main-illustration.png" alt="배너 이미지" />
      </BannerContainer>
    );
  }
}
