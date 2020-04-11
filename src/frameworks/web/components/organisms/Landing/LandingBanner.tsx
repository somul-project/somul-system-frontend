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

const MaxContainer = styled.div`
  max-width: 1280px;
  margin: 0 auto;
`;

const BannerTitleImg = styled.img`
  max-width: 430px;
  max-height: 175px;
  width: 100%;
  height: auto;
  display: block;
`;

const BannerMainIllust = styled.img`
  max-width: 589px;
  max-height: 526px;
  width: 100%;
  height: auto;
`;

export default class LandingBanner extends React.PureComponent {
  render() {
    return (
      <div style={{ backgroundColor: theme.color.primary.Azure }}>
        <MaxContainer>
          <ScreenClassRender render={(sClass: string) => (
            <BannerContainer
              style={{
                margin: ['lg', 'xl'].includes(sClass) ? '0 110px 0 180px' : '0 16px',
              }}
            >
              <Row
                justify={['lg', 'xl'].includes(sClass) ? 'between' : 'center'}
                align={['lg', 'xl'].includes(sClass) ? 'start' : 'end'}
                style={{
                  width: '100%',
                  paddingTop: ['lg', 'xl'].includes(sClass) ? '120px' : '32px',
                  paddingBottom: ['lg', 'xl'].includes(sClass) ? '80px' : '23px',
                  margin: '0',
                }}
              >
                <Col xs={12} sm={12} lg={6} style={{ textAlign: ['lg', 'xl'].includes(sClass) ? 'initial' : 'center' }}>
                  <BannerTitleImg src="main-contents-title.svg" alt="소프트웨어에 물들다" />
                  <Visible lg xl>
                    <Label type="H4" color={theme.color.primary.White} style={{ margin: '40px 0' }}>
                      2020년 05월 30일 14:00 ~
                    </Label>
                    <a href="#landingAbout"><Button isPrimary={false} label="자세히보기" onClick={() => undefined} /></a>
                  </Visible>
                </Col>
                <Hidden lg xl>
                  <Col xs={12}>
                    <Label type={['xs', 'sm'].includes(sClass) ? 'MobileP1' : 'H4'} color={theme.color.primary.White} style={{ textAlign: 'center', marginTop: '32px' }}>
                      2020년 05월 30일 14:00 ~
                    </Label>
                  </Col>
                </Hidden>
                <Col
                  xs={12}
                  lg={6}
                  style={{
                    marginTop: ['lg', 'xl'].includes(sClass) ? '0' : '32px',
                    textAlign: ['lg', 'xl'].includes(sClass) ? 'initial' : 'center',
                  }}
                >
                  <BannerMainIllust
                    src="main-illustration.png"
                    alt="배너 이미지"
                    style={{
                      float: ['lg', 'xl'].includes(sClass) ? 'right' : 'none',
                    }}
                  />
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
        </MaxContainer>
      </div>
    );
  }
}
