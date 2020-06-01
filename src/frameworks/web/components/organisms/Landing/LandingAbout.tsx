import React from 'react';
import styled from 'styled-components';
import { Row, Col, ScreenClassRender } from 'react-grid-system';

import theme from 'theme';
import Label from 'frameworks/web/components/atoms/Label/Label';

import AboutImage from 'assets/illust/about-illustration.svg';

const MaxContainer = styled.div`
  max-width: 1280px;
  margin: 0 auto;
`;

const AboutIllust = styled.img`
  max-width: 635px;
  max-height: 315px;
  width: 100%;
  height: auto;
  display: block;
  margin: 0 auto;
`;

export default function LandingAbout(): React.ReactElement {
  return (
    <MaxContainer>
      <ScreenClassRender
        render={(sClass: string) => (
          <div id="landingAbout">
            <div
              style={{
                textAlign: 'center',
                padding: ['lg', 'xl'].includes(sClass) ? '64px 0' : '33px 0 25px 0',
              }}
            >
              <Label
                type={['lg', 'xl'].includes(sClass) ? 'H4' : 'MobileH3'}
                color={theme.color.primary.Azure}
              >
                ABOUT SOMUL
              </Label>
            </div>
            <Row
              justify="center"
              align="center"
              style={{ margin: ['lg', 'xl'].includes(sClass) ? '0 0 110px 0' : '0 0 48px 0' }}
            >
              <Col xs={10} md={8} lg={6}>
                <AboutIllust src={AboutImage} alt="About Somul" />
              </Col>
              <Col
                xs={10}
                lg={4}
                style={{
                  textAlign: ['lg', 'xl'].includes(sClass) ? 'left' : 'center',
                  whiteSpace: 'pre-line',
                }}
              >
                <Label
                  type={['lg', 'xl'].includes(sClass) ? 'P1' : 'MobileP1'}
                  style={{ paddingTop: ['lg', 'xl'].includes(sClass) ? '0' : '30px' }}
                >
                  &apos;소프트웨어에 물들다&apos;는 전국의 도서관에서 소프트웨어를 주제로
                  {sClass === 'md' ? '\n' : ' '}
                  한날 한시에 진행되는 강연 프로젝트입니다.
                </Label>
                <div style={{ padding: '12px 0' }} />
                <Label
                  type={['lg', 'xl'].includes(sClass) ? 'P1' : 'MobileP1'}
                  mark="full"
                  markColor="#FFF0A6"
                >
                  올해는 COVID-19 바이러스(이하 코로나)로 인하여 온라인으로 진행합니다.
                  {sClass === 'md' ? '\n' : ' '}
                  5월 30일 오후 2시에 공개될 강연 리스트(유튜브 링크)로 여러분들을 찾아뵙겠습니다.
                </Label>
              </Col>
            </Row>
          </div>
        )}
      />
    </MaxContainer>
  );
}
