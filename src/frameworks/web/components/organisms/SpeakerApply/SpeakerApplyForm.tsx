/* eslint-disable react/jsx-props-no-spreading */
import React, { useEffect, useMemo, useState } from 'react';
import styled from 'styled-components';
import { Container, Row, Col } from 'react-grid-system';
import { useMutation, useQuery } from '@apollo/client';
import { useHistory } from 'react-router';

import theme from 'theme';
import { isYouTubeURL } from 'utils/validator';
import * as ROUTES from 'utils/routes';

import TextArea from 'frameworks/web/components/atoms/TextArea/TextArea';
import Loading from 'frameworks/web/components/atoms/Loading/Loading';
import Label from 'frameworks/web/components/atoms/Label/Label';
import TextField from 'frameworks/web/components/atoms/TextField/TextField';
import Button from 'frameworks/web/components/atoms/Button/Button';
import DividedCard from 'frameworks/web/components/molecules/DividedCard/DividedCard';

import { GET_USER } from 'service/graphql/query/User';
import { CREATE_SESSION } from 'service/graphql/mutation/Session';
import { IUserData, IUserPayload } from 'interfaces/service/graphql/query/IUser';
import {
  ICreateSessionData,
  ICreateSessionPayload,
} from 'interfaces/service/graphql/mutation/ISession';

import SpeakerApplyAsset from 'assets/illust/speaker-apply-illustration.png';
import AddButtonAsset from 'assets/icon/add-circle.svg';
import OffButtonAsset from 'assets/icon/highlight-off.svg';

const SCSpeakerApplyImage = styled.img`
  width: 380px;
  height: auto;
`;

const SCContainer = styled(Container)`
  margin-top: 80px;
  margin-bottom: 20px;
`;

const SCRow = styled(Row)`
  margin-bottom: 24px;
`;

const SCYoutubeButtonContainer = styled.div`
  display: flex;
  justify-content: center;

  width: 100%;
  margin: 3px auto auto;
  padding: 16px;

  border: solid 1px ${theme.color.secondary.Ash};
  border-radius: 10px;
  cursor: pointer;
`;

const SCAddImg = styled.img`
  width: 24px;
  height: 24px;
  margin-right: 16px;
`;

const SCStepper = styled.div`
  display: ${(props) => (props.hidden ? 'none' : 'block')};
`;

const SCButtonGroup = styled.div`
  display: flex;
  justify-content: space-between;
`;

function CustomTextLabel({ label }: { label: string }): React.ReactElement {
  return (
    <Label style={{ textAlign: 'right', paddingTop: '16px' }} color={theme.color.secondary.Nickel}>
      {label}
    </Label>
  );
}

function FullTextField({ defaultLabel = '', onChange = null, ...rest }: any): React.ReactElement {
  return (
    <TextField
      {...rest}
      defaultLabel={defaultLabel}
      onValueChange={onChange}
      style={{ width: 'auto', marginBottom: '3px' }}
    />
  );
}

function FullTextArea({ defaultLabel = '', onChange = null, ...rest }: any): React.ReactElement {
  return (
    <TextArea
      {...rest}
      defaultLabel={defaultLabel}
      onValueChange={onChange}
      style={{ width: 'auto' }}
    />
  );
}

function Hint({ hint }: any): React.ReactElement {
  return (
    <Label
      type="P2"
      color={theme.color.secondary.Moon}
      style={{ float: 'right', paddingTop: '8px', textAlign: 'right' }}
    >
      {hint}
    </Label>
  );
}

function YoutubeAddButton({ onClick }: any): React.ReactElement {
  return (
    <SCYoutubeButtonContainer onClick={onClick}>
      <SCAddImg src={AddButtonAsset} />
      <Label type="H5" color={theme.color.secondary.Nickel}>
        링크 추가
      </Label>
    </SCYoutubeButtonContainer>
  );
}

export default function SpeakerApplyForm(): React.ReactElement {
  const [step, setStep] = useState<number>(0);
  const [loading, setLoading] = useState<boolean>(false);

  const [email, setEmail] = useState<string>('dexterastin@kookmin.ac.kr');
  const [name, setName] = useState<string>('');
  const [bio, setBio] = useState<string>('');
  const [title, setTitle] = useState<string>('');
  const [description, setDescription] = useState<string>('');
  const [youtubeLinks, setYoutubeLinks] = useState<string[]>(['']);
  const [isFocusYoutube, setFocusYoutube] = useState<boolean>(false);

  const isEnabled = useMemo(() => {
    if (step === 0) {
      return !!bio;
    }
    return !!title && !!description && youtubeLinks.every(isYouTubeURL);
  }, [step, bio, title, description, youtubeLinks]);

  const handleBio = (newBio: string) => {
    setBio(newBio);
  };

  const handleTitle = (newTitle: string) => {
    setTitle(newTitle);
  };

  const handleDescription = (newDescription: string) => {
    setDescription(newDescription);
  };

  const handleYoutubeLink = (newLink: string, i: number) => {
    setFocusYoutube(!!newLink);
    setYoutubeLinks((links) => {
      const newLinks = [...links];
      newLinks[i] = newLink;
      return newLinks;
    });
  };

  const handleAddYoutubeLink = () => {
    setYoutubeLinks((links) => {
      const newLinks = [...links];
      newLinks.push('');
      return newLinks;
    });
  };

  const handleRemoveYoutubeLink = (i: number) => {
    setYoutubeLinks((links) => {
      const newLinks = [...links];
      newLinks.splice(i, 1);
      return newLinks;
    });
  };

  const handlePrevious = () => {
    setStep((prevState) => prevState - 1);
  };

  const handleNext = () => {
    setStep((prevState) => prevState + 1);
  };

  const { loading: queryLoading, error: queryError, data: queryData } = useQuery<
    IUserData,
    IUserPayload
  >(GET_USER, {
    variables: { email },
    fetchPolicy: 'no-cache',
  });

  const [createSession] = useMutation<ICreateSessionData, ICreateSessionPayload>(CREATE_SESSION, {
    variables: {
      user_email: email,
      session_name: title,
      session_time: '0',
      introduce: bio,
      document: youtubeLinks.join(','),
      session_explainer: '-',
    },
  });

  const history = useHistory();

  useEffect(() => {
    if (!queryError && queryData) {
      setEmail(queryData?.user.email || '');
      setName(queryData?.user.name || '');

      if (queryData?.user.sessions.length !== 0) {
        history.push(ROUTES.PROFILE);
      }
    }
  }, [queryLoading, queryData, queryError]);

  const handleSubmit = async () => {
    if (!isEnabled) return;
    setLoading(true);

    try {
      const resp: { data: ICreateSessionData } = await createSession();
      if (resp.data.createSession.statusCode === '0') {
        history.push(ROUTES.APPLY_SPEAKER_COMPLETE);
      } else {
        throw new Error('시스템 내부에 에러가 발생했습니다. 잠시후 다시 시도해주세요.');
      }
    } catch (e) {
      alert(e.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      {(queryLoading || loading) && <Loading />}
      <DividedCard title={`STEP 0${step + 1}`}>
        {{
          left: (
            <div>
              <SCSpeakerApplyImage src={SpeakerApplyAsset} alt="강연자 지원 이미지" />
            </div>
          ),
          right: (
            <SCContainer>
              <SCStepper hidden={step !== 0}>
                <SCRow>
                  <Col md={3} sm={12}>
                    <CustomTextLabel label="이름" />
                  </Col>
                  <Col md={8} sm={12}>
                    <FullTextField readOnly value={name} />
                  </Col>
                </SCRow>
                <SCRow>
                  <Col md={3} sm={12}>
                    <CustomTextLabel label="이메일" />
                  </Col>
                  <Col md={8} sm={12}>
                    <FullTextField readOnly value={email} />
                  </Col>
                </SCRow>
                <SCRow>
                  <Col md={3} sm={12}>
                    <CustomTextLabel label="소개" />
                  </Col>
                  <Col md={8} sm={12}>
                    <FullTextArea
                      height={120}
                      maxLength={300}
                      defaultLabel="간단한 이력 및 본인소개를 작성해주세요 (공백포함 최대 300자)"
                      onChange={handleBio}
                    />
                    <Hint hint="※ 강연 당일 리스트에 노출되는 내용입니다." />
                  </Col>
                </SCRow>
                <SCRow>
                  <Col md={3} sm={12} />
                  <Col md={8} sm={12}>
                    <Button
                      isEnabled={isEnabled}
                      type="default"
                      label="다음"
                      isPrimary={false}
                      onClick={handleNext}
                      style={{ float: 'right' }}
                    />
                  </Col>
                </SCRow>
              </SCStepper>
              <SCStepper hidden={step !== 1}>
                <SCRow>
                  <Col md={3} sm={12}>
                    <CustomTextLabel label="강연 제목" />
                  </Col>
                  <Col md={8} sm={12}>
                    <FullTextField
                      value={title}
                      onChange={handleTitle}
                      maxLength={50}
                      defaultLabel="강연 제목을 입력하세요. (공백포함 최대 50자)"
                    />
                    <Hint hint="※ 편리한 검색을 위해 강연 제목에 불필요한 영어 사용을 자제해주세요." />
                  </Col>
                </SCRow>
                <SCRow>
                  <Col md={3} sm={12}>
                    <CustomTextLabel label="강연 내용" />
                  </Col>
                  <Col md={8} sm={12}>
                    <FullTextArea
                      height={120}
                      maxLength={300}
                      defaultLabel="강연 내용을 입력하세요 (공백포함 최대 500자)"
                      onChange={handleDescription}
                    />
                  </Col>
                </SCRow>
                <SCRow>
                  <Col md={3} sm={12}>
                    <CustomTextLabel label="유튜브 링크" />
                  </Col>
                  <Col md={8} sm={12}>
                    {youtubeLinks.map((link, i) => {
                      const key = `youtube-${i}`;
                      return (
                        <FullTextField
                          key={key}
                          value={link}
                          isError={isFocusYoutube && !isYouTubeURL(link)}
                          onChange={(newLink: string) => handleYoutubeLink(newLink, i)}
                          defaultLabel="강연 링크를 입력하세요."
                          isButton={i !== 0}
                          buttonSrc={OffButtonAsset}
                          onButtonClicked={() => handleRemoveYoutubeLink(i)}
                        />
                      );
                    })}
                    {youtubeLinks.length !== 3 && (
                      <YoutubeAddButton onClick={handleAddYoutubeLink} />
                    )}
                    <Hint
                      hint={
                        <>
                          ※ 재생시간이 15분 이상인 경우 영상 분할 업로드를 추천 드리며,
                          <br />
                          영상은 반드시 순서대로 입력해주세요.
                        </>
                      }
                    />
                  </Col>
                </SCRow>
                <SCRow>
                  <Col md={3} sm={12} />
                  <Col md={8} sm={12}>
                    <SCButtonGroup>
                      <Button
                        type="default"
                        label="이전"
                        isPrimary={false}
                        onClick={handlePrevious}
                      />
                      <Button
                        type="default"
                        label="제출하기"
                        isEnabled={isEnabled}
                        isPrimary
                        onClick={handleSubmit}
                      />
                    </SCButtonGroup>
                  </Col>
                </SCRow>
              </SCStepper>
            </SCContainer>
          ),
        }}
      </DividedCard>
    </>
  );
}
