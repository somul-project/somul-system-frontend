import React from 'react';
import styled from 'styled-components';
import theme from 'theme';
import Label from 'frameworks/web/components/atoms/Label/Label';
import Tag from 'frameworks/web/components/atoms/Tag/Tag';
import { Row, Col } from 'react-grid-system';

const SponsorContainer = styled.div`
  height: 740px;
  padding: 64px 85px 120px 85px;
`;

const SponsorIllust = styled.img`
  width: 540px;
  height: 450px;
  display: block;
  margin: 0px auto;
`;

const SponsorLabelContainer = styled.div`
  padding: 40px;
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
      <SponsorContainer>
        <div style={{ textAlign: 'center', marginBottom: '72px' }}>
          <Label type="H4" color={theme.color.primary.Azure}>HOW TO SPONSOR</Label>
        </div>
        <Row gutterWidth={30} justify="center" align="center">
          <Col xs={6}>
            <SponsorIllust src="sponsor-illustration.png" alt="About Somul" />
          </Col>
          <Col xs={6}>
            <SponsorLabelContainer>
              <Label type="P1" style={{ marginBottom: '8px' }}>
                늘 그렇듯이 이런 행사에는 산업체, 개인들의 열화와 같은 지지, 그리고 물심양면의 후원이 필요합니다.
              </Label>
              <Label type="P1" style={{ marginBottom: '8px' }}>
                현금 후원도 받지만, 도서관과 행사 참여 어린이들에게 주실 서적, 기념품, 그리고 봉사자들을 위 후원품을 보내주시면 저희가 전달해드립니다.
                아주 작은 후원이라도 감사히 생각하며 개인, 회사, 기관의 소중한 후원이 우리의 미래를 밝게 할 것입니다.
              </Label>
              <Label type="P1">
                또한 후원사들의 명단 & 로고를 널리 알려 이 소중한 행사에 같이 해주심을 기억하겠습니다.
              </Label>
            </SponsorLabelContainer>
            <SponsorInfoContainer>
              <Tag>물품 발송 주소</Tag>
              <Label type="P2" style={{ margin: '6px 0 0 16px' }}>
                서울특별시 성동구 왕십리로 130, 10층(KCC프리미어타워)
                <br />
                한국코드클럽위원회, 소프트웨어에 물들다 담당자
              </Label>
            </SponsorInfoContainer>
            <SponsorInfoContainer>
              <Tag>관계자 이메일</Tag>
              <Label type="P2" style={{ margin: '6px 0 0 20px' }}>
                somul.may@gmail.com
              </Label>
            </SponsorInfoContainer>
          </Col>
        </Row>
      </SponsorContainer>
    );
  }
}
