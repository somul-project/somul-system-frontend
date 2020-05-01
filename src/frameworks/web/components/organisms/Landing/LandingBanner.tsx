import React from 'react';
// eslint-disable-next-line no-unused-vars
import styled, { StyledComponent } from 'styled-components';
import theme from 'theme';
import Label from 'frameworks/web/components/atoms/Label/Label';
import Button from 'frameworks/web/components/atoms/Button/Button';
import {
  Row, Col, Visible, Hidden, ScreenClassRender,
} from 'react-grid-system';

import { ILandingContainer } from 'interfaces/frameworks/web/components/organisms/LandingBanner/ILandingBanner';

const BannerContainer = styled.div`
  background-color: ${theme.color.primary.Azure};
  background-image: url("illust/main-illustration.png");
  background-repeat: no-repeat;
`;

const BannerContainerSmall = styled(BannerContainer)`
  margin: 0 16px;
  background-position: center 65%;
  background-size: 328px 293px;
`;

const BannerContainerMedium = styled(BannerContainer)`
  margin: 0 16px;
  background-position: right 339px;
  background-size: 589px 526px;
`;

const BannerContainerLarge = styled(BannerContainer)`
  margin: 0 110px 0 180px;
  background-position: right 114px;
  background-size: 589px 526px;
`;

const RowContainerSmall = styled.div`
  width: 100%;
  padding: 32px 0 348px 0;
`;

const RowContainerMedium = styled.div`
  width: 100%;
  padding: 64px 0 533px 57px;
`;

const RowContainerLarge = styled.div`
  width: 100%;
  padding: 120px 0 253px 0;
`;

const MaxContainer = styled.div`
  max-width: 1280px;
  margin: 0 auto;             
  padding-top: ${(props:ILandingContainer) => (props.size === 'xs' ? '48px' : '80px')};
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
        <ScreenClassRender render={(sClass: string) => {
          let BannerContainerFit: StyledComponent<'div', any, {}, never>;
          let RowContainerFit: StyledComponent<'div', any, {}, never>;
          if (['lg', 'xl'].includes(sClass)) {
            BannerContainerFit = BannerContainerLarge;
            RowContainerFit = RowContainerLarge;
          } else if (sClass === 'md') {
            BannerContainerFit = BannerContainerMedium;
            RowContainerFit = RowContainerMedium;
          } else {
            BannerContainerFit = BannerContainerSmall;
            RowContainerFit = RowContainerSmall;
          }
          return (
            <MaxContainer size={sClass}>
              <BannerContainerFit>
                <RowContainerFit>
                  <Row
                    justify={['lg', 'xl'].includes(sClass) ? 'between' : 'center'}
                    align={['lg', 'xl'].includes(sClass) ? 'start' : 'end'}
                    style={{
                      width: '100%',
                      margin: '0',
                    }}
                  >
                    <Col
                      xs={12}
                      lg={9}
                      style={{ textAlign: ['xs', 'sm'].includes(sClass) ? 'center' : 'initial' }}
                    >
                      <BannerTitleImg src="logo/main-contents-title.svg" alt="소프트웨어에 물들다" />
                      <Hidden xs sm>
                        <Label type="H4" color={theme.color.primary.White} style={{ margin: '40px 0' }}>
                          2020년 05월 30일 14:00 ~
                        </Label>
                        <a href="#landingAbout" style={{ textDecoration: 'none' }}>
                          <Button isPrimary={false} label="자세히보기" onClick={() => undefined} />
                        </a>
                      </Hidden>
                    </Col>
                    <Visible xs sm>
                      <Col xs={12}>
                        <Label
                          type={['xs', 'sm'].includes(sClass) ? 'MobileP1' : 'H4'}
                          color={theme.color.primary.White}
                          style={{ textAlign: 'center', marginTop: '32px' }}
                        >
                          2020년 05월 30일 14:00 ~
                        </Label>
                      </Col>
                    </Visible>
                  </Row>
                </RowContainerFit>
                <Visible xs sm>
                  <div style={{
                    display: 'flex',
                    justifyContent: 'center',
                    width: '100%',
                    paddingBottom: '40px',
                  }}
                  >
                    <a href="#landingAbout" style={{ textDecoration: 'none' }}>
                      <Button isPrimary={false} label="자세히보기" onClick={() => undefined} />
                    </a>
                  </div>
                </Visible>
              </BannerContainerFit>
            </MaxContainer>
          );
        }}
        />
      </div>
    );
  }
}
