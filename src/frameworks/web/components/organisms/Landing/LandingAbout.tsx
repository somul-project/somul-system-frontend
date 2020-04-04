import React from 'react';
import styled from 'styled-components';
import theme from 'theme';
import Label from 'frameworks/web/components/atoms/Label/Label';
import { Row, Col } from 'react-grid-system';

const AboutContainer = styled.div`
  height: 560px;
  min-width: 1280px;
  padding: 64px 85px 110px 85px;
`;

const AboutIllust = styled.img`
  width: 635px;
  height: 315px;
  display: block;
  margin: 0px auto;
`;

export default class LandingAbout extends React.PureComponent {
  render() {
    return (
      <AboutContainer>
        <div style={{ textAlign: 'center', marginBottom: '40px' }}>
          <Label type="H4" color={theme.color.primary.Azure}>ABOUT SOMUL</Label>
        </div>
        <Row gutterWidth={30} align="center">
          <Col xs={7}>
            <AboutIllust src="about-illustration.png" alt="About Somul" />
          </Col>
          <Col xs={5}>
            <Label type="P1">
              &apos;소프트웨어에 물들다&apos;는 전국의 도서관에서 소프트웨어를 주제로 한날 한시에 진행되는 강연 프로젝트입니다.
            </Label>
            <div style={{ padding: '12px 0' }} />
            <Label type="P1" mark="full">
              올해는 COVID-19 바이러스(이하 코로나)로 인하여 온라인으로 진행합니다.
              5월 29일 오후 2시에 공개될 강연 리스트(유튜브 링크)로 여러분들을 찾아뵙겠습니다.
            </Label>
          </Col>
        </Row>
      </AboutContainer>
    );
  }
}
