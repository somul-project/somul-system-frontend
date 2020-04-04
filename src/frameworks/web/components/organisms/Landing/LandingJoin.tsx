import React from 'react';
import styled from 'styled-components';
import theme from 'theme';
import Label from 'frameworks/web/components/atoms/Label/Label';
import ContentsBox from 'frameworks/web/components/atoms/ContentsBox/ContentsBox';
import Button from 'frameworks/web/components/atoms/Button/Button';
import { Row, Col } from 'react-grid-system';

const JoinContainer = styled.div`
  height: 690px;
  min-width: 1280px;
  padding: 64px 85px 64px 85px;
  background: ${theme.color.secondary.Snow};
`;

const JoinCardContainer = styled.div`
  padding: 24px 0 48px 0;
`;

const JoinIllust = styled.img`
  width: 540px;
  height: 251px;
  display: block;
  margin: 0px auto;
`;

const notYetAlert = () => {
  // eslint-disable-next-line no-undef, no-alert
  alert('추후 공개될 예정입니다.');
};

export default class LandingJoin extends React.PureComponent {
  render() {
    return (
      <JoinContainer>
        <div style={{ textAlign: 'center', marginBottom: '64px' }}>
          <Label type="H4">JOIN US</Label>
        </div>
        <Row>
          <Col xs={10} offset={{ xs: 1 }}>
            <ContentsBox height={395} isDarkBackground>
              <JoinCardContainer>
                <JoinIllust src="speaker-illustration.png" alt="Join us" />
                <div style={{ display: 'flex', justifyContent: 'center' }}>
                  <Button type="wide" label="강연자 신청하기" isPrimary onClick={notYetAlert} />
                </div>
              </JoinCardContainer>
            </ContentsBox>
          </Col>
        </Row>
        <div style={{ textAlign: 'center', marginTop: '48px' }}>
          <Label type="P1">※ 올해 본 행사는 온라인에서 진행되는 관계로, 도서관 및 봉사자 신청을 받지 않습니다.</Label>
        </div>
      </JoinContainer>
    );
  }
}
