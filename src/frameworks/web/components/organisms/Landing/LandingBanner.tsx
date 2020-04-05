import React from 'react';
import styled from 'styled-components';
import theme from 'theme';
import Label from 'frameworks/web/components/atoms/Label/Label';
import Button from 'frameworks/web/components/atoms/Button/Button';
import {
  Row, Col, Visible, Hidden, ScreenClassRender,
} from 'react-grid-system';

const BannerContainer = styled.div`
  background-color: ${theme.color.primary.Azure};
`;

const BannerTitleImg = styled.img`
  max-width: 430px;
  max-height: 175px;
  width: 100%;
  height: auto;
`;

const BannerMainIllust = styled.img`
  float: right;
  max-width: 589px;
  max-height: 526px;
  width: 100%;
  height: auto;
`;

export default class LandingBanner extends React.PureComponent {
  render() {
    return (
      <ScreenClassRender render={(sClass: string) => (
        <BannerContainer>
          <Row
            justify="center"
            align={['lg', 'xl'].includes(sClass) ? 'start' : 'end'}
            style={{
              width: '100%',
              paddingTop: ['lg', 'xl'].includes(sClass) ? '120px' : '32px',
              paddingBottom: ['lg', 'xl'].includes(sClass) ? '80px' : '23px',
            }}
          >
            <Col offset={{ xs: 1, lg: 1 }} xs={7} lg={4}>
              <BannerTitleImg src="main-contents-title.svg" alt="소프트웨어에 물들다" />
              <Visible lg xl>
                <Label type="H4" color={theme.color.primary.White} style={{ margin: '40px 0' }}>
                  2020년 05월 30일 14:00 ~
                </Label>
                <a href="#landingAbout"><Button isPrimary={false} label="자세히보기" onClick={() => undefined} /></a>
              </Visible>
            </Col>
            <Hidden lg xl>
              <Col xs={4}>
                <Label type="H4" color={theme.color.primary.White} style={{ textAlign: 'right' }}>
                  2020년 05월 30일
                  <br />
                  14:00 ~
                </Label>
              </Col>
            </Hidden>
            <Col
              offset={{ xs: 1 }}
              xs={9}
              lg={5}
              style={{
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
                marginTop: ['lg', 'xl'].includes(sClass) ? '0' : '32px',
              }}
            >
              <BannerMainIllust src="main-illustration.png" alt="배너 이미지" />
            </Col>
          </Row>
          <Hidden lg xl>
            <div style={{
              display: 'flex',
              justifyContent: 'center',
              width: '100%',
              paddingBottom: '40px',
            }}
            >
              <a href="#landingAbout"><Button isPrimary={false} label="자세히보기" onClick={() => undefined} /></a>
            </div>
          </Hidden>
        </BannerContainer>
      )}
      />
    );
  }
}
