import React from 'react';
import { useHistory } from 'react-router-dom';
import styled from 'styled-components';
import theme from 'theme';
import Label from 'frameworks/web/components/atoms/Label/Label';
import Button from 'frameworks/web/components/atoms/Button/Button';
import ContentsBox from 'frameworks/web/components/atoms/ContentsBox/ContentsBox';
import StatusContent from 'frameworks/web/components/organisms/StatusPage/StatusContent';
import { Query } from 'react-apollo';
import apolloClient from 'frameworks/web/apollo';

import * as ROUTES from 'utils/routes';
import { GET_USER } from 'service/graphql/query/User';
import useCurrentSession from 'frameworks/web/hooks/CurrentSessionHook';
import Loading from 'frameworks/web/components/atoms/Loading/Loading';
import { IUserData } from 'interfaces/service/graphql/query/IUser';
import { StatusType } from 'interfaces/frameworks/web/components/organisms/StatusPage/IStatusContent';

const StatusContainer = styled.div`
  padding-top: 160px;
  padding-bottom: 120px;
  // padding: 160px 85px 120px 85px;
  background-color: ${theme.color.secondary.Ash};
  text-align: center;
  height: auto;
  min-height: calc(100vh - 163px);
`;

const StatusContentContainer = styled(ContentsBox)`
  margin: 80px auto 0;
  width: 1110px;
`;

const NoStatusContainer = styled.div`
  padding: 120px 0;
`;

export default function StatusPage(): React.ReactElement {
  const history = useHistory();
  const [isCurrentSessionLoaded, currentSession] = useCurrentSession();

  const linkToApply = () => {
    history.push(ROUTES.APPLY_SPEAKER);
  };

  return (
    <>
      <StatusContainer>
        <Label type="H3" color={theme.color.primary.Azure}>
          나의 신청현황
        </Label>
        <StatusContentContainer isDarkBackground>
          {isCurrentSessionLoaded && (
            // @ts-ignore
            <Query<IUserData, { email: string }>
              query={GET_USER}
              variables={{ email: currentSession?.email! }}
              client={apolloClient}
            >
              {/* @ts-ignore */}
              {({ loading, error, data }) => {
                if (loading) {
                  return <Loading />;
                }

                if (error) {
                  return (
                    <NoStatusContainer>
                      <Label type="P1" color={theme.color.secondary.Moon}>
                        신청한 강연 정보를 불러오는 데에 오류가 발생했습니다.
                      </Label>
                    </NoStatusContainer>
                  );
                }

                if (data && data.user.sessions.length === 0) {
                  return (
                    <NoStatusContainer>
                      <Label
                        type="P1"
                        color={theme.color.secondary.Moon}
                        style={{ paddingBottom: '45px' }}
                      >
                        신청하신 강연이 없습니다.
                      </Label>
                      <Button label="신청하기" onClick={linkToApply} />
                    </NoStatusContainer>
                  );
                }

                return data!.user!.sessions!.map((session) => (
                  <StatusContent
                    statusNum={parseInt(session.admin_approved, 10) as StatusType}
                    applyDate={session.createdAt}
                    title={session.session_name}
                    video={session.document.split(',')}
                    speaker={data!.user!.name}
                    bio={session.introduce}
                    description="서버에 객체가 없어........"
                  />
                ));
              }}
            </Query>
          )}
        </StatusContentContainer>
      </StatusContainer>
      {!isCurrentSessionLoaded && <Loading />}
    </>
  );
}
