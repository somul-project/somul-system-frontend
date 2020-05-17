import React from 'react';
import { useHistory } from 'react-router-dom';
import styled from 'styled-components';
import theme from 'theme';
import Label from 'frameworks/web/components/atoms/Label/Label';
import Button from 'frameworks/web/components/atoms/Button/Button';
import ContentsBox from 'frameworks/web/components/atoms/ContentsBox/ContentsBox';
import StatusContent from 'frameworks/web/components/organisms/StatusPage/StatusContent';
import { IStatusPage } from 'interfaces/frameworks/web/components/pages/StatusPage/IStatusPage';

const StatusContainer = styled.div`
  padding: 160px 85px 120px 85px;
  background-color: ${theme.color.secondary.Ash};
  text-align: center;
`;

const StatusContentContainer = styled(ContentsBox)`
  margin-top: 80px;
  width: 100%;
`;

const NoStatusContainer = styled.div`
  padding: 120px 0;
`;

export default function StatusPage({ isApply = true }: IStatusPage): React.ReactElement {
  const history = useHistory();
  const linkToApply = () => {
    history.push('/apply/speaker');
  };

  // TODO: 아래 내용들을 GraphQL과 연동하여 사용자의 데이터를 가져와야 합니다.
  const applyDate = '04.23';
  const title =
    '클라우드와 AI로 바뀌는 세상 클라우드와 AI로 바뀌는 세상 클라우드와 AI로 바뀌는 세상 (50자 Full)';
  const video = new Array(3).fill('https://youtube.com');
  const speaker = '김수민';
  const bio = `따뜻한 평화스러운 얼음 심장의 청춘을 사막이다. 않는 품고 반짝이는 때문이다. 위하여, 싸인 생의 가진 그들의 사막이다. 얼음이 열락의 목숨이 들어 굳세게
  위하여, 내려온 봄날의 대한 이것이다. 아름답고 고행을 인간의 오직 이상을 싹이 청춘은 청춘있다. 그와 피부가 예가 소담스러운 뜨거운지라, 사막이다. 주며, 싶이 이 모래뿐일 사막이다.
  행복스럽고 무엇을 인간에 같이, 예수는 목숨이 있는가? 그러므로 그것은 심장의 어디. 따뜻한 평화스러운 얼음 심장의 청춘을 사막이다. 않는 품고 반짝이는 때문이다.
  위하여, 싸인 생의 가진 그. (300자 Full)`;
  const description = `따뜻한 평화스러운 얼음 심장의 청춘을 사막이다. 않는 품고 반짝이는 때문이다. 위하여,
  싸인 생의 가진 그들의 사막이다. 얼음이 열락의 목숨이 들어 굳세게 위하여, 내려온
  봄날의 대한 이것이다. 아름답고 고행을 인간의 오직 이상을 싹이 청춘은 청춘 있다. 그와
  피부가 예가 소담스러운 뜨거운지라, 사막이다. 주며, 싶이 이 모래뿐일 사막이다.
  행복스럽고 무엇을 인간에 같이, 예수는 목숨이 있는가? 그러므로 그것은 심장의 어디
  무엇을 아니다. 따뜻한 평화스러운 얼음 심장의 청춘을 사막이다. 않는 품고 반짝이는
  때문이다. 따뜻한 평화스러운 얼음 심장의 청춘을 사막이다. 않는 품고 반짝이는
  때문이다. 위하여, 싸인 생의 가진 그들의 사막이다. 얼음이 열락의 목숨이 들어 굳세게
  위하여, 내려온 봄날의 대한 이것이다. 아름답고 고행을 인간의 오직 이상을 싹이 청춘은
  청춘 있다. 그와 피부가 예가 소담스러운 뜨거운지라, 사막이다. 주며, 싶이 이 모래뿐일
  사막이다. 행복스럽고 무엇을 인간에 같이. (500자 Full)`;

  return (
    <StatusContainer>
      <Label type="H3" color={theme.color.primary.Azure}>
        나의 신청현황
      </Label>
      <StatusContentContainer isDarkBackground>
        {!isApply && (
          <NoStatusContainer>
            <Label type="P1" color={theme.color.secondary.Moon} style={{ paddingBottom: '45px' }}>
              신청하신 강연이 없습니다.
            </Label>
            <Button label="신청하기" onClick={linkToApply} />
          </NoStatusContainer>
        )}
        {isApply && (
          <StatusContent
            statusNum={0}
            applyDate={applyDate}
            title={title}
            video={video}
            speaker={speaker}
            bio={bio}
            description={description}
          />
        )}
      </StatusContentContainer>
    </StatusContainer>
  );
}
