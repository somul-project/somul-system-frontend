import React, { ReactNode, useEffect, useState } from 'react';
import styled from 'styled-components';
import { Row, Col } from 'react-grid-system';

import LectureCard from 'frameworks/web/components/molecules/LectureCard/LectureCard';
import { useQuery } from '@apollo/client';
import { ISessionData } from 'interfaces/service/graphql/query/ISession';
import { GET_SESSIONS } from 'service/graphql/query/Sessions';
import LectureModal from 'frameworks/web/components/molecules/LectureModal/LectureModal';
import { ISession } from 'interfaces/service/graphql/schema/ISession';
import Loading from 'frameworks/web/components/atoms/Loading/Loading';

const LectureListContainer = styled.div`
  width: 100%;
  max-width: 1280px;
  padding: 48px 85px 90px 85px;
`;

export default function LectureList(): React.ReactElement {
  const [lectureArray, setLectureArray] = useState<ISession[]>([]);
  const [isLectureModalOpened, setLectureModalOpened] = useState(false);
  const [clickLectureData, setClickLectureData] = useState<ISession | null>(null);

  const getSessions = useQuery<ISessionData>(GET_SESSIONS, { fetchPolicy: 'no-cache' });

  useEffect(() => {
    if (getSessions.data) {
      const lArray: ISession[] = [];
      getSessions.data!.sessions.forEach((session) => {
        lArray.push(session);
      });

      setLectureArray(lArray);
    }
  }, [getSessions.data]);

  const onLectureClicked = (idx: number) => {
    // @ts-ignore
    setClickLectureData(lectureArray[idx]);
    setLectureModalOpened(true);
  };

  function LectureColContainer({ col }: any): React.ReactElement {
    const listElement: ReactNode[] = [];
    lectureArray.forEach((lecture, i) => {
      if (i % 3 === col) {
        listElement.push(
          <LectureCard
            title={lecture.session_name}
            speaker={lecture.user.name}
            onCardClick={() => onLectureClicked(i)}
            style={{ marginBottom: '30px' }}
          />,
        );
      }
    });
    return <Col>{listElement}</Col>;
  }

  return (
    <>
      <LectureListContainer>
        <Row align="start">
          <LectureColContainer col={0} />
          <LectureColContainer col={1} />
          <LectureColContainer col={2} />
        </Row>
      </LectureListContainer>
      {isLectureModalOpened && (
        <LectureModal
          isOpen={isLectureModalOpened}
          onClose={() => setLectureModalOpened(false)}
          title={clickLectureData!.session_name}
          youtubeLink={clickLectureData!.document.split(',')}
          speaker={clickLectureData!.user.name}
          speakerInfo={clickLectureData!.introduce}
          lectureInfo={clickLectureData!.session_explainer}
        />
      )}
      {getSessions.loading && <Loading />}
    </>
  );
}
