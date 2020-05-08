import React from 'react';
import theme from 'theme';
import styled from 'styled-components';
import {
  Row, Col, Visible, Hidden,
} from 'react-grid-system';

import Label from 'frameworks/web/components/atoms/Label/Label';

const MaxContainer = styled.div`
  max-width: 1280px;
  margin: 0 auto;
`;

const FooterContainer = styled.div`
  padding: 40px 54px;
  background: ${theme.color.primary.Black};
`;

const FOOTER_LOGO_WIDTH = 40;
const FooterLogo = styled.img`
  width: ${FOOTER_LOGO_WIDTH}px;
  height: ${FOOTER_LOGO_WIDTH}px;
  margin: 8px;
`;

const FooterCenterContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

function FooterLogos({ style = null }: any): React.ReactElement {
  return (
    <div style={style}>
      <a href="https://www.facebook.com/groups/may.somul/">
        <FooterLogo src="logo/facebook-footer.svg" alt="footer facebook icon" />
      </a>
      <a href="https://github.com/somul-project">
        <FooterLogo src="logo/github-footer.svg" alt="footer github icon" />
      </a>
      <a href="https://codeclubkorea.org">
        <FooterLogo src="logo/codeclub.svg" alt="footer code-club icon" />
      </a>
    </div>
  );
}

function CopyRightLabel({
  type = 'MobileP2',
  style = { marginTop: '8px', textAlign: 'center' },
}: any) :React.ReactElement {
  return (
    <Label type={type} color={theme.color.secondary.Moon} style={style}>
      Copyright © 2020 Colored by Software, All rights reserved.
    </Label>
  );
}

export default function Footer(): React.ReactElement {
  return (
    <div style={{ background: theme.color.primary.Black }}>
      <MaxContainer>
        <FooterContainer>
          <Visible lg xl>
            <Row align="center" justify="between" style={{ height: '100%', margin: '0' }}>
              <Col md={4}>
                <Label type="H5" color={theme.color.secondary.Moon}>소프트웨어에 물들다</Label>
                <Label type="P2" color={theme.color.secondary.Moon}>Colored in Software</Label>
              </Col>
              <Col lg={6}>
                <FooterLogos style={{ float: 'right', marginLeft: '230px' }} />
                <CopyRightLabel type="P2" style={{ float: 'right' }} />
              </Col>
            </Row>
          </Visible>
          <Hidden lg xl>
            <FooterCenterContainer>
              <FooterLogos />
              <CopyRightLabel />
            </FooterCenterContainer>
          </Hidden>
        </FooterContainer>
      </MaxContainer>
    </div>
  );
}
