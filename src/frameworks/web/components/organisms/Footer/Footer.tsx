import React from 'react';
import styled from 'styled-components';
import Label from 'frameworks/web/components/atoms/Label/Label';
import theme from 'theme';
import { Row, Col } from 'react-grid-system';

const FooterContainer = styled.div`
  height: 144px;
  min-width: 1280px;
  padding: 0 85px;
  background: ${theme.color.primary.Black};
`;

const FooterRightContainer = styled.div`
  float: right;
`;

const FooterSNSLogo = styled.img`
  width: 32px;
  height: 32px;
  margin: 8px 8px;
`;

const CodeClubLogo = styled.img`
  width: 48px;
  height: 48px;
  margin-left: 8px;
`;

export default class Footer extends React.PureComponent {
  render() {
    return (
      <FooterContainer>
        <Row align="center" justify="between" style={{ height: '100%' }}>
          <Col xs={3}>
            <Label type="H5" color={theme.color.secondary.Moon}>소프트웨어에 물들다</Label>
            <Label type="P2" color={theme.color.secondary.Moon}>colored in software</Label>
          </Col>
          <Col xs={4}>
            <FooterRightContainer>
              <a href="https://www.facebook.com/groups/may.somul/">
                <FooterSNSLogo src="facebook-footer.svg" alt="footer facebook icon" />
              </a>
              <a href="https://github.com/somul-project">
                <FooterSNSLogo src="github-footer.svg" alt="footer github icon" />
              </a>
              <a href="https://codeclubkorea.org">
                <CodeClubLogo src="codeclub.svg" alt="footer code-club icon" />
              </a>
            </FooterRightContainer>
            <Label type="P2" color={theme.color.secondary.Moon} style={{ float: 'right' }}>
              Copyright © 2016 Somul, All rights reserved.
            </Label>
          </Col>
        </Row>
      </FooterContainer>
    );
  }
}
