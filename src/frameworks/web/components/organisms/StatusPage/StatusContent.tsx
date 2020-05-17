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

export default function StatusContent({ statusNum = 0 }: IStatusContent): React.ReactElement {
  const statusString = ['심사중', '반려', '심사중', '승인완료'];
  const statusColor = [
    theme.color.secondary.Moon,
    theme.color.alert.Failure,
    theme.color.secondary.Moon,
    theme.color.alert.Success,
  ];
  const videoArray = new Array(3).fill('https://youtube.com');
  return (
    <div>
      <ContentHeaderContainer>
        <DateContainer>
          <Label type="H5" color="white" style={{ marginRight: '24px' }}>
            신청일
          </Label>
          <Label type="P1" color="white">
            04.23
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
          <Label type="P1">04.23</Label>
        </DateContainer>
      </ContentHeaderContainer>
      <SingleLine />
      <ContentContainer>
        <div>
          <TitleContainer>
            <Label type="H4" color={theme.color.primary.Azure} style={{ textAlign: 'left' }}>
              클라우드와 AI로 바뀌는 세상
            </Label>
          </TitleContainer>
          <VideoButtonContainer>
            {videoArray.map((href, i) => {
              return (
                <div key={href} style={{ marginRight: i === videoArray.length - 1 ? '0' : '32px' }}>
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
          <Row justify="between" gutterWidth={30} style={{ marginTop: '48px' }}>
            <Col xs={5}>
              <IntroduceContainer>
                <SpeakerContainer>
                  <div style={{ display: 'flex' }}>
                    <Label type="H5" color={theme.color.secondary.Moon}>
                      강연자
                    </Label>
                    <Label type="P1" style={{ marginLeft: '16px' }}>
                      김수민
                    </Label>
                  </div>
                </SpeakerContainer>
                <Label type="P2" color={theme.color.secondary.Moon} style={{ textAlign: 'left' }}>
                  따뜻한 평화스러운 얼음 심장의 청춘을 사막이다. 않는 품고 반짝이는 때문이다.
                  위하여, 싸인 생의 가진 그들의 사막이다. 얼음이 열락의 목숨이 들어 굳세게 위하여,
                  내려온 봄날의 대한 이것이다. 아름답고 고행을 인간의 오직 이상을 싹이 청춘은 청춘
                  있다. 그와 피부가 예가 소담스러운 뜨거운지라, 사막이다. 주며, 싶이 이 모래뿐일
                  사막이다. 행복스럽고 무엇을 인간에 같이, 예수는 목숨이 있는가? 그러므로 그것은
                  심장의 어디. 따뜻한 평화스러운 얼음 심장의 청춘을 사막이다. 않는 품고 반짝이는
                  때문이다. 위하여, 싸인 생의 가진 그. (300자 Full)
                </Label>
              </IntroduceContainer>
            </Col>
            <Col xs={7} style={{ textAlign: 'left' }}>
              <Label
                type="H5"
                color={theme.color.secondary.Moon}
                style={{ margin: '24px 0 16px 0' }}
              >
                강연 내용
              </Label>
              <Label type="P2">
                따뜻한 평화스러운 얼음 심장의 청춘을 사막이다. 않는 품고 반짝이는 때문이다. 위하여,
                싸인 생의 가진 그들의 사막이다. 얼음이 열락의 목숨이 들어 굳세게 위하여, 내려온
                봄날의 대한 이것이다. 아름답고 고행을 인간의 오직 이상을 싹이 청춘은 청춘 있다. 그와
                피부가 예가 소담스러운 뜨거운지라, 사막이다. 주며, 싶이 이 모래뿐일 사막이다.
                행복스럽고 무엇을 인간에 같이, 예수는 목숨이 있는가? 그러므로 그것은 심장의 어디
                무엇을 아니다. 따뜻한 평화스러운 얼음 심장의 청춘을 사막이다. 않는 품고 반짝이는
                때문이다. 따뜻한 평화스러운 얼음 심장의 청춘을 사막이다. 않는 품고 반짝이는
                때문이다. 위하여, 싸인 생의 가진 그들의 사막이다. 얼음이 열락의 목숨이 들어 굳세게
                위하여, 내려온 봄날의 대한 이것이다. 아름답고 고행을 인간의 오직 이상을 싹이 청춘은
                청춘 있다. 그와 피부가 예가 소담스러운 뜨거운지라, 사막이다. 주며, 싶이 이 모래뿐일
                사막이다. 행복스럽고 무엇을 인간에 같이. (500자 Full)
              </Label>
            </Col>
          </Row>
        </div>
      </ContentContainer>
    </div>
  );
}
