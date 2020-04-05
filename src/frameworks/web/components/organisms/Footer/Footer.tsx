import React from 'react';
import styled from 'styled-components';
import Label from 'frameworks/web/components/atoms/Label/Label';
import theme from 'theme';
import {
  Row, Col, Visible, Hidden,
} from 'react-grid-system';

const FooterContainer = styled.div`
  height: 144px;
  padding: 0 85px;
  background: ${theme.color.primary.Black};
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

const FooterCenterContainer = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

export default class Footer extends React.PureComponent {
  render() {
    return (
      <FooterContainer>
        <Visible lg xl>
          <Row align="center" justify="between" style={{ height: '100%', margin: '0' }}>
            <Col md={4}>
              <Label type="H5" color={theme.color.secondary.Moon}>소프트웨어에 물들다</Label>
              <Label type="P2" color={theme.color.secondary.Moon}>Colored in Software</Label>
            </Col>
            <Col lg={6}>
              <div style={{ float: 'right', marginLeft: '230px' }}>
                <a href="https://www.facebook.com/groups/may.somul/">
                  <FooterSNSLogo src="facebook-footer.svg" alt="footer facebook icon" />
                </a>
                <a href="https://github.com/somul-project">
                  <FooterSNSLogo src="github-footer.svg" alt="footer github icon" />
                </a>
                <a href="https://codeclubkorea.org">
                  <CodeClubLogo src="codeclub.svg" alt="footer code-club icon" />
                </a>
              </div>
              <Label type="P2" color={theme.color.secondary.Moon} style={{ float: 'right' }}>
                Copyright © 2020 Colored by Software, All rights reserved.
              </Label>
            </Col>
          </Row>
        </Visible>
        <Hidden lg xl>
          <FooterCenterContainer>
            <div>
              <a href="https://www.facebook.com/groups/may.somul/">
                <FooterSNSLogo src="facebook-footer.svg" alt="footer facebook icon" />
              </a>
              <a href="https://github.com/somul-project">
                <FooterSNSLogo src="github-footer.svg" alt="footer github icon" />
              </a>
              <a href="https://codeclubkorea.org">
                <CodeClubLogo src="codeclub.svg" alt="footer code-club icon" />
              </a>
            </div>
            <Label type="P2" color={theme.color.secondary.Moon} style={{ marginTop: '8px', textAlign: 'center' }}>
              Copyright © 2020 Colored by Software, All rights reserved.
            </Label>
          </FooterCenterContainer>
        </Hidden>
      </FooterContainer>
    );
  }
}
