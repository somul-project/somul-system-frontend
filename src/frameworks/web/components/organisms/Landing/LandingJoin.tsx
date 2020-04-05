import React from 'react';
import styled from 'styled-components';
import theme from 'theme';
import Label from 'frameworks/web/components/atoms/Label/Label';
import ContentsBox from 'frameworks/web/components/atoms/ContentsBox/ContentsBox';
import Button from 'frameworks/web/components/atoms/Button/Button';
import { Row, Col, ScreenClassRender } from 'react-grid-system';

const JoinContainer = styled.div`
  background: ${theme.color.secondary.Snow};
`;

const JoinIllust = styled.img`
  max-width: 540px;
  max-height: 251px;
  width: 100%;
  height: auto;
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
      <ScreenClassRender render={(sClass: string) => (
        <JoinContainer id="landingJoin">
          <div style={{ textAlign: 'center', padding: ['lg', 'xl'].includes(sClass) ? '64px 0' : '32px 0' }}>
            <Label type="H4">JOIN US</Label>
          </div>
          <Row justify="center" style={{ margin: '0' }}>
            <Col xs={10} lg={9}>
              <ContentsBox isDarkBackground>
                <div style={{ padding: ['lg', 'xl'].includes(sClass) ? '24px 0 48px 0' : '' }}>
                  <JoinIllust src="speaker-illustration.png" alt="Join us" />
                  <div style={{ display: 'flex', justifyContent: 'center', width: '100%' }}>
                    <Button
                      type={['lg', 'xl'].includes(sClass) ? 'wide' : 'mobilewide'}
                      label="강연자 신청하기"
                      isPrimary
                      onClick={notYetAlert}
                    />
                  </div>
                </div>
              </ContentsBox>
            </Col>
            <Col
              xs={8}
              style={{
                textAlign: 'center',
                padding: ['lg', 'xl'].includes(sClass) ? '64px 0' : '32px 0',
              }}
            >
              <Label type="P1">※ 올해 본 행사는 온라인에서 진행되는 관계로, 도서관 및 봉사자 신청을 받지 않습니다.</Label>
            </Col>
          </Row>
        </JoinContainer>
      )}
      />
    );
  }
}
