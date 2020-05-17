import React from 'react';
import styled from 'styled-components';
import { Row, Col } from 'react-grid-system';
import theme from 'theme';
import Label from 'frameworks/web/components/atoms/Label/Label';
import { IStatusContent } from 'interfaces/frameworks/web/components/organisms/StatusPage/IStatusContent';
import VideoButton from 'frameworks/web/components/atoms/VideoButton/VideoButton';

const ContentHeaderContainer = styled.div`
  padding: 16px 95px;
  display: flex;
  justify-content: space-between;
`;

const DateContainer = styled.div`
  padding: 6px 0;
  display: flex;
`;

const SingleLine = styled.div`
  width: 100%;
  height: 1px;
  background-color: ${theme.color.secondary.Ash};
`;

const ContentContainer = styled.div`
  padding: 48px 95px 72px 95px;
`;

const TitleAndVideoContainer = styled.div`
  min-height: 92px;
  width: 100%;
`;

const TitleContainer = styled.div`
  max-width: 540px;
  float: left;
`;

const VideoButtonContainer = styled.div`
  float: right;
  display: flex;
  justify-content: flex-end;
`;

const IntroduceContainer = styled.div`
  width: 100%;
  padding: 24px;
  border-radius: 20px;
  background-color: ${theme.color.secondary.Snow};
`;

const SpeakerContainer = styled.div`
  display: flex;
  justify-content: center;
  margin-bottom: 16px;
`;

export default function StatusContent({
  statusNum,
  applyDate,
  title,
  video,
  speaker,
  bio,
  description,
}: IStatusContent): React.ReactElement {
  const statusString = ['심사중', '반려', '심사중', '승인완료'];
  const statusColor = [
    theme.color.secondary.Moon,
    theme.color.alert.Failure,
    theme.color.secondary.Moon,
    theme.color.alert.Success,
  ];
  return (
    <div>
      <ContentHeaderContainer>
        {/* 하단 DateContainer는 정렬을 맞추기 위한 dummy Container입니다 */}
        <DateContainer>
          <Label type="H5" color="white" style={{ marginRight: '24px' }}>
            신청일
          </Label>
          <Label type="P1" color="white">
            {applyDate}
          </Label>
        </DateContainer>
        <Label type="H4" color={theme.color.secondary.Moon}>
          <span style={{ color: statusColor[statusNum] }}>{statusString[statusNum]}</span>{' '}
          <span style={{ fontWeight: 'normal' }}>{statusNum ? '되었습니다' : '입니다'}</span>
        </Label>
        <DateContainer>
          <Label type="H5" style={{ marginRight: '24px' }}>
            신청일
          </Label>
          <Label type="P1">{applyDate}</Label>
        </DateContainer>
      </ContentHeaderContainer>
      <SingleLine />
      <ContentContainer>
        <TitleAndVideoContainer>
          <TitleContainer>
            <Label type="H4" color={theme.color.primary.Azure} style={{ textAlign: 'left' }}>
              {title}
            </Label>
          </TitleContainer>
          <VideoButtonContainer>
            {video.map((href, i) => {
              return (
                <div key={href} style={{ marginRight: i === video.length - 1 ? '0' : '32px' }}>
                  <VideoButton href={href} />
                  <Label
                    type="P2"
                    color={theme.color.secondary.Moon}
                    style={{ textAlign: 'center', marginTop: '4px' }}
                  >
                    영상 {i + 1}
                  </Label>
                </div>
              );
            })}
          </VideoButtonContainer>
        </TitleAndVideoContainer>
        <Row justify="between" gutterWidth={30} style={{ marginTop: '48px' }}>
          <Col xs={5}>
            <IntroduceContainer>
              <SpeakerContainer>
                <div style={{ display: 'flex' }}>
                  <Label type="H5" color={theme.color.secondary.Moon}>
                    강연자
                  </Label>
                  <Label type="P1" style={{ marginLeft: '16px' }}>
                    {speaker}
                  </Label>
                </div>
              </SpeakerContainer>
              <Label type="P2" color={theme.color.secondary.Moon} style={{ textAlign: 'left' }}>
                {bio}
              </Label>
            </IntroduceContainer>
          </Col>
          <Col xs={7} style={{ textAlign: 'left' }}>
            <Label type="H5" color={theme.color.secondary.Moon} style={{ margin: '24px 0 16px 0' }}>
              강연 내용
            </Label>
            <Label type="P2">{description}</Label>
          </Col>
        </Row>
      </ContentContainer>
    </div>
  );
}
