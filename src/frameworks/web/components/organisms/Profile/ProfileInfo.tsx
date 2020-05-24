/* eslint-disable no-unused-vars,@typescript-eslint/no-unused-vars */
import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import styled from 'styled-components';
import theme from 'theme';
import { useMutation } from '@apollo/client';

import Label from 'frameworks/web/components/atoms/Label/Label';
import Button from 'frameworks/web/components/atoms/Button/Button';
import Loading from 'frameworks/web/components/atoms/Loading/Loading';
import TextField from 'frameworks/web/components/atoms/TextField/TextField';
import DividedCard from 'frameworks/web/components/molecules/DividedCard/DividedCard';

import * as ROUTES from 'utils/routes';
import { UPDATE_USER } from 'service/graphql/mutation/User';
import useCurrentSession from 'frameworks/web/hooks/CurrentSessionHook';

import ProfileIllust from 'assets/illust/speaker-apply-illustration.svg';
import WarningSVG from 'assets/icon/warning.svg';

const TextLabelContainer = styled.div`
  width: 93px;
  float: left;
  text-align: right;
`;

const TextFieldContainer = styled.div`
  width: 445px;
  float: right;
  padding-bottom: 64px;
`;

const WarningTextContainer = styled.div`
  float: right;
  width: 400px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 16px;
`;

const WithdrawContainer = styled.div`
  width: 289px;
  margin-top: 17px;
  float: right;
  display: flex;
  justify-content: space-between;
`;

export default function ProfileInfo(): React.ReactElement {
  const [name, setName] = useState<string>('');
  const [phoneNumber, setPhoneNumber] = useState<string>('');
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');

  const [isLoaded, currentUser] = useCurrentSession();
  const [loading, setLoading] = useState<boolean>(false);

  const history = useHistory();

  useEffect(() => {
    if (isLoaded) {
      if (currentUser?.name) {
        setName(currentUser.name);
        setEmail(currentUser.email);
        setPhoneNumber(currentUser.phonenumber);
      } else {
        history.push(ROUTES.SIGN_IN);
      }
    }
  }, [isLoaded, currentUser]);

  const onPasswordChangeClicked = () => {
    // 비밀번호 변경 버튼 클릭시 작동되는 함수
  };

  const [createSession] = useMutation(UPDATE_USER, {
    variables: { email, name, phonenumber: phoneNumber },
  });

  const onSaveButtonClicked = async () => {
    try {
      setLoading(true);
      const resp = await createSession();
      // eslint-disable-next-line no-empty
    } catch (e) {
    } finally {
      setLoading(false);
    }
    // save 버튼 클릭시 작동되는 함수
  };

  const onWithdrawClicked = () => {
    history.push('/profile/withdraw');
  };
  return (
    <div>
      {loading && !isLoaded && <Loading />}
      <DividedCard title="PROFILE" leftPadding="70px 0 0 0">
        {{
          left: (
            <div>
              <img
                src={ProfileIllust}
                alt="강연자 지원 이미지"
                style={{ width: '380px', height: '450px', margin: '75px 0 0 0' }}
              />
            </div>
          ),
          right: (
            <div style={{ margin: '16px 95px 0 68px' }}>
              <TextLabelContainer>
                <Label type="H5" style={{ marginTop: '14px' }} color={theme.color.secondary.Nickel}>
                  이름
                </Label>
                <Label type="H5" style={{ margin: '54px 0' }} color={theme.color.secondary.Nickel}>
                  이메일
                </Label>
                <Label
                  type="H5"
                  style={{ marginBottom: '54px' }}
                  color={theme.color.secondary.Nickel}
                >
                  휴대폰
                </Label>
                {/* <Label type="H5" color={theme.color.secondary.Nickel}> */}
                {/*  현재 비밀번호 */}
                {/* </Label> */}
              </TextLabelContainer>
              <TextFieldContainer>
                <TextField
                  readOnly
                  defaultLabel="이름을 입력하세요"
                  onValueChange={(data: string) => setName(data)}
                  style={{ width: 'auto' }}
                  value={name}
                />
                <TextField
                  defaultLabel=""
                  onValueChange={() => undefined}
                  style={{ width: 'auto', margin: '24px 0' }}
                  readOnly
                  value={email}
                />
                <TextField
                  readOnly
                  defaultLabel="전화번호를 입력하세요"
                  onValueChange={(data: string) => setPhoneNumber(data)}
                  style={{ width: 'auto' }}
                  value={phoneNumber}
                />
                {/* <div> */}
                {/*  <Button */}
                {/*    label="비밀번호 변경" */}
                {/*    onClick={onPasswordChangeClicked} */}
                {/*    style={{ float: 'right' }} */}
                {/*  /> */}
                {/*  <TextField */}
                {/*    defaultLabel="현재 비밀번호를 입력하세요" */}
                {/*    onValueChange={(data: string) => setPassword(data)} */}
                {/*    style={{ width: '228px', marginTop: '24px', webkitTextSecurity: 'disc' }} */}
                {/*    value={password} */}
                {/*  /> */}
                {/* </div> */}
                {/* <WarningTextContainer> */}
                {/*  <img */}
                {/*    src={WarningSVG} */}
                {/*    alt="경고 아이콘" */}
                {/*    style={{ width: '20px', height: '18px' }} */}
                {/*  /> */}
                {/*  <div style={{ display: 'flex' }}> */}
                {/*    <Label type="P2" color={theme.color.alert.Warning}> */}
                {/*      현재 비밀번호 */}
                {/*    </Label> */}
                {/*    <Label type="P2" color={theme.color.secondary.Moon}> */}
                {/*      를 입력하셔야 개인정보 수정을 완료할 수 있습니다. */}
                {/*    </Label> */}
                {/*  </div> */}
                {/* </WarningTextContainer> */}
              </TextFieldContainer>
              {/* <Button */}
              {/*  type="default" */}
              {/*  label="저장하기" */}
              {/*  isPrimary */}
              {/*  onClick={onSaveButtonClicked} */}
              {/*  style={{ float: 'right' }} */}
              {/* /> */}
            </div>
          ),
        }}
      </DividedCard>
      {/* <div style={{ width: '1100px', margin: '0 auto' }}> */}
      {/*  <WithdrawContainer> */}
      {/*    <Label type="P1" color={theme.color.secondary.Nickel}> */}
      {/*      계정을 삭제하시겠습니까? */}
      {/*    </Label> */}
      {/*    <Label type="H5" color={theme.color.secondary.Nickel} onClick={onWithdrawClicked}> */}
      {/*      계정 삭제하기 */}
      {/*    </Label> */}
      {/*  </WithdrawContainer> */}
      {/* </div> */}
    </div>
  );
}
