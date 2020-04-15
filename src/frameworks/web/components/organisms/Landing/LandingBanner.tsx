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
  background-image: url("main-illustration.png");
  background-repeat: no-repeat;
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

export default class LandingBanner extends React.PureComponent {
  render() {
    return (
      <div style={{ backgroundColor: theme.color.primary.Azure }}>
        <MaxContainer>
          <ScreenClassRender render={(sClass: string) => {
            // xs, sm : 2, md : 1, lg, xl: 0
            let sClassNum: number;
            let contentPadding: string;
            let imgPosition: string;
            if (['lg', 'xl'].includes(sClass)) {
              sClassNum = 0;
              contentPadding = '120px 0 253px 0';
              imgPosition = 'right 114px';
            } else if (sClass === 'md') {
              sClassNum = 1;
              contentPadding = '64px 0 533px 57px';
              imgPosition = 'right 339px';
            } else {
              sClassNum = 2;
              contentPadding = '32px 0 348px 0';
              imgPosition = 'center 65%';
            }
            return (
              <BannerContainer
                style={{
                  margin: sClassNum === 0 ? '0 110px 0 180px' : '0 16px',
                  backgroundPosition: imgPosition,
                  backgroundSize: sClassNum === 2 ? '328px 293px' : '589px 526px',
                }}
              >
                <Row
                  justify={sClassNum === 0 ? 'between' : 'center'}
                  align={sClassNum === 0 ? 'start' : 'end'}
                  style={{
                    width: '100%',
                    padding: contentPadding,
                    margin: '0',
                  }}
                >
                  <Col xs={12} sm={12} lg={9} style={{ textAlign: sClassNum === 2 ? 'center' : 'initial' }}>
                    <BannerTitleImg src="main-contents-title.svg" alt="소프트웨어에 물들다" />
                    <Hidden xs sm>
                      <Label type="H4" color={theme.color.primary.White} style={{ margin: '40px 0' }}>
                        2020년 05월 30일 14:00 ~
                      </Label>
                      <a href="#landingAbout"><Button isPrimary={false} label="자세히보기" onClick={() => undefined} /></a>
                    </Hidden>
                  </Col>
                  <Visible xs sm>
                    <Col xs={12}>
                      <Label type={sClassNum === 2 ? 'MobileP1' : 'H4'} color={theme.color.primary.White} style={{ textAlign: 'center', marginTop: '32px' }}>
                        2020년 05월 30일 14:00 ~
                      </Label>
                    </Col>
                  </Visible>
                </Row>
                <Visible xs sm>
                  <div style={{
                    display: 'flex',
                    justifyContent: 'center',
                    width: '100%',
                    paddingBottom: '40px',
                  }}
                  >
                    <a href="#landingAbout"><Button isPrimary={false} label="자세히보기" onClick={() => undefined} /></a>
                  </div>
                </Visible>
              </BannerContainer>
            );
          }}
          />
        </MaxContainer>
      </div>
    );
  }
}
