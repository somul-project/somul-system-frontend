import React from 'react';
import styled from 'styled-components';
import theme from 'theme';
import Label from 'frameworks/web/components/atoms/Label/Label';
import Tag from 'frameworks/web/components/atoms/Tag/Tag';
import {
  Row, Col, Visible, Hidden, ScreenClassRender,
} from 'react-grid-system';

const MaxContainer = styled.div`
  max-width: 1280px;
  margin: 0 auto;
`;

const SponsorIllust = styled.img`
  max-width: 540px;
  max-height: 450px;
  width: 100%;
  height: auto;
  display: block;
  margin: 0px auto;
`;

const SponsorLabelContainer = styled.div`
  margin-bottom: 32px;
  border-radius: 20px;
  background-color: #f4f4f4;
`;

const SponsorInfoContainer = styled.div`
  display: flex;
  margin-bottom: 16px;
`;

export default class LandingSponsor extends React.PureComponent {
  render() {
    return (
      <MaxContainer>
        <ScreenClassRender render={(sClass: string) => (
          <div id="landingSponsor">
            <div
              style={{
                textAlign: 'center',
                margin: ['lg', 'xl'].includes(sClass) ? '64px 0' : '32px 0',
              }}
            >
              <Label
                type={['lg', 'xl'].includes(sClass) ? 'H4' : 'MobileH3'}
                color={theme.color.primary.Azure}
              >
                HOW TO SPONSOR
              </Label>
            </div>
            <Row
              justify="center"
              align="center"
              style={{ margin: ['lg', 'xl'].includes(sClass) ? '0 0 120px 0' : '0 0 32px 0' }}
            >
              <Col xs={12} md={6} lg={5} xl={5}>
                <SponsorIllust
                  src="illust/sponsor-illustration.png"
                  alt="About Somul"
                  style={{ marginBottom: ['lg', 'xl'].includes(sClass) ? '0' : '32px' }}
                />
              </Col>
              <Col xs={11} lg={6} xl={5}>
                <SponsorLabelContainer style={{ padding: ['lg', 'xl'].includes(sClass) ? '40px' : '24px' }}>
                  <Label
                    type={['lg', 'xl'].includes(sClass) ? 'P1' : 'MobileP1'}
                    style={{ marginBottom: '8px' }}
                  >
                    늘 그렇듯이 이런 행사에는 산업체, 개인들의 열화와 같은 지지, 그리고 물심양면의 후원이 필요합니다.
                  </Label>
                  <Label
                    type={['lg', 'xl'].includes(sClass) ? 'P1' : 'MobileP1'}
                    style={{ marginBottom: '8px' }}
                  >
                    현금 후원도 받지만, 도서관과 행사 참여 어린이들에게 주실 서적, 기념품, 그리고 봉사자들을 위 후원품을 보내주시면 저희가 전달해드립니다.
                    아주 작은 후원이라도 감사히 생각하며 개인, 회사, 기관의 소중한 후원이 우리의 미래를 밝게 할 것입니다.
                  </Label>
                  <Label type={['lg', 'xl'].includes(sClass) ? 'P1' : 'MobileP1'}>
                    또한 후원사들의 명단 & 로고를 널리 알려 이 소중한 행사에 같이 해주심을 기억하겠습니다.
                  </Label>
                </SponsorLabelContainer>
                <Visible xl lg>
                  <SponsorInfoContainer>
                    <Tag>물품 발송 주소</Tag>
                    <Label type="P2" style={{ margin: '3px 0 0 16px' }}>
                      서울특별시 성동구 왕십리로 130, 10층(KCC프리미어타워)
                      <br />
                      한국코드클럽위원회, 소프트웨어에 물들다 담당자
                    </Label>
                  </SponsorInfoContainer>
                  <SponsorInfoContainer>
                    <Tag>관계자 이메일</Tag>
                    <Label type="P2" style={{ margin: '3px 0 0 20px' }}>
                      somul.may@gmail.com
                    </Label>
                  </SponsorInfoContainer>
                </Visible>
                <Hidden xl lg>
                  <div style={{ textAlign: 'center' }}>
                    <Tag>물품 발송 주소</Tag>
                    <Label type="P2" style={{ margin: '16px 0 24px 0' }}>
                      서울특별시 성동구 왕십리로 130, 10층 (KCC프리미어타워)
                      <Visible md><br /></Visible>
                      {' '}
                      한국코드클럽위원회,
                      <Visible xs sm><br /></Visible>
                      {' '}
                      소프트웨어에 물들다 담당자
                    </Label>
                    <Tag>관계자 이메일</Tag>
                    <Label type="P2" style={{ margin: '16px 0' }}>
                      somul.may@gmail.com
                    </Label>
                  </div>
                </Hidden>
              </Col>
            </Row>
          </div>
        )}
        />
      </MaxContainer>
    );
  }
}
