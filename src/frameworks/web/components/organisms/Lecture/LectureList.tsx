import React, { ReactNode, useEffect } from 'react';
import styled from 'styled-components';
import { Row, Col } from 'react-grid-system';

import { ILectureInfo } from 'interfaces/frameworks/web/components/organisms/Lecture/ILectureList';
import LectureCard from 'frameworks/web/components/molecules/LectureCard/LectureCard';
import { useQuery } from '@apollo/client';
import { ISessionData } from 'interfaces/service/graphql/query/ISession';
import { GET_SESSIONS } from 'service/graphql/query/Sessions';

const LectureListContainer = styled.div`
  width: 100%;
  max-width: 1280px;
  padding: 48px 85px 90px 85px;
`;

export default function LectureList(): React.ReactElement {
  const lectureArray: ILectureInfo[] = [];

  const getSessions = useQuery<ISessionData>(GET_SESSIONS, { fetchPolicy: 'no-cache' });

  useEffect(() => {
    if (getSessions.data) {
      getSessions.data!.sessions.forEach((session) => {
        lectureArray.push({ title: session.session_name, speaker: session.user_email });
      });
    }
  }, [getSessions.data]);

  const onLectureClicked = (idx: number) => {
    // TODO: 렉쳐카드 클릭 시 모달이 나오는 함수를 구현해야 함
    console.log(idx);
  };

  function LectureColContainer({ col }: any): React.ReactElement {
    const listElement: ReactNode[] = [];
    lectureArray.forEach((lecture, i) => {
      if (i % 3 === col) {
        listElement.push(
          <LectureCard
            title={lecture.title}
            speaker={lecture.speaker}
            onCardClick={() => onLectureClicked(i)}
            style={{ marginBottom: '30px' }}
          />,
        );
      }
    });
    return <Col>{listElement}</Col>;
  }
  return (
    <LectureListContainer>
      <Row align="start">
        <LectureColContainer col={0} />
        <LectureColContainer col={1} />
        <LectureColContainer col={2} />
      </Row>
    </LectureListContainer>
  );
}
