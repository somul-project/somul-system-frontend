import React from 'react';
import styled from 'styled-components';
import { Row, Col } from 'react-grid-system';

import theme from 'theme';
import SomulLogo from 'assets/logo/logo-white.svg';
import ListIllustAsset from 'assets/illust/list-illlustration.svg';
import Label from 'frameworks/web/components/atoms/Label/Label';
import LectureList from 'frameworks/web/components/organisms/Lecture/LectureList';

const LectureHeader = styled.div`
  margin-top: 80px;
  padding: 23px 0;
  display: flex;
  justify-content: center;
  background-color: ${theme.color.primary.Azure};
`;

const LectureHeaderContainer = styled(Row)`
  width: 100%;
  max-width: 1280px;
  padding: 0 85px;
`;

const LectureHeaderTitle = styled.div`
  display: flex;
  margin-bottom: 38px;
`;

const ListIllust = styled.img`
  width: 240px;
  height: 174px;
`;

const LectureListContainer = styled.div`
  display: flex;
  justify-content: center;
  background-color: ${theme.color.secondary.Snow};
`;

export default function Lecture(): React.ReactElement {
  return (
    <>
      <LectureHeader>
        <LectureHeaderContainer align="center" justify="between" gutterWidth={0}>
          <Col xs={8}>
            <LectureHeaderTitle>
              <img
                src={SomulLogo}
                alt="소물 로고"
                style={{ width: '138px', height: '24px', margin: '6px 21px 6px 0' }}
              />
              <Label type="H4" color={theme.color.primary.White}>
                강연 리스트
              </Label>
            </LectureHeaderTitle>
          </Col>
          <Col xs={3}>
            <ListIllust src={ListIllustAsset} alt="일러스트 이미지" />
          </Col>
        </LectureHeaderContainer>
      </LectureHeader>
      <LectureListContainer>
        <LectureList />
      </LectureListContainer>
    </>
  );
}
