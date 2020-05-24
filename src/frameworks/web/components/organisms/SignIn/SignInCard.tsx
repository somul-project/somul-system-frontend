/* eslint-disable @typescript-eslint/no-unused-vars,no-unused-vars */
import React, { useState } from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

import theme from 'theme';

import Label from 'frameworks/web/components/atoms/Label/Label';
import ContentsBox from 'frameworks/web/components/atoms/ContentsBox/ContentsBox';
import TextField from 'frameworks/web/components/atoms/TextField/TextField';
import Button from 'frameworks/web/components/atoms/Button/Button';
import SignButton from 'frameworks/web/components/atoms/SignButton/SignButton';
import Loading from 'frameworks/web/components/atoms/Loading/Loading';
import Modal from 'frameworks/web/components/molecules/Modal/Modal';

import SomulLogo from 'assets/logo/logo.svg';
import { SERVER_URL } from 'utils/constants';
import * as ROUTES from 'utils/routes';
import { isEmail, isValidPassword } from 'utils/validator';
import SignInRequest from 'service/request/SignInRequest';

const SignInContainer = styled(ContentsBox)`
  width: 730px;
  margin: 0 auto;
  padding: 64px 95px;
`;

const SignInFormContainer = styled.div`
  width: 350px;
  margin: 40px auto;
`;

const ForgotContainer = styled.div`
  margin: 0 4px;
  float: right;
  display: flex;
`;

const BlockContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 16px;
`;

const SingleLine = styled.div`
  width: 214px;
  height: 1px;
  background-color: ${theme.color.secondary.Ash};
`;

const SignButtonContainer = styled.div`
  width: 350px;
  margin: 0 auto;
`;

export default function SignInCard(): React.ReactElement {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isLoading, setLoading] = useState(false);
  const [isAlert, setAlert] = useState(false);
  const [alertDescription, setAlertDescription] = useState('');

  const googleLogin = () => {
    window.location.href = `${SERVER_URL}/auth/google`;
  };

  const githubLogin = () => {
    window.location.href = `${SERVER_URL}/auth/github`;
  };

  const openAlert = (description: string) => {
    setAlert(true);
    setAlertDescription(description);
  };

  const login = async () => {
    const loginPayload = { email, password };

    if (isEmail(email) && isValidPassword(password)) {
      setLoading(true);

      try {
        const result = await SignInRequest.login(loginPayload);
        const resultData = result.data!;

        if (resultData.result.statusCode === '0') {
          window.location.replace('/');
        } else {
          openAlert(resultData.result.errorMessage);
        }
        setLoading(false);
      } catch (e) {
        openAlert('계속 되지 않을 경우, 소물 팀에 문의 부탁드립니다!');
        setLoading(false);
      }
    }
  };

  return (
    <>
      <SignInContainer isDarkBackground>
        <Label type="H4" color={theme.color.primary.Azure} style={{ textAlign: 'center' }}>
          SIGN IN
        </Label>
        <SignInFormContainer>
          <TextField
            defaultLabel="이메일을 입력하세요"
            onValueChange={(value) => setEmail(value)}
            style={{ width: 'auto', margin: '8px 0' }}
          />
          <TextField
            type="password"
            defaultLabel="비밀번호를 입력하세요"
            onValueChange={(value) => setPassword(value)}
            style={{ width: 'auto', margin: '8px 0' }}
          />
          {/* <ForgotContainer> */}
          {/*  <Label type="P2" color={theme.color.secondary.Moon}> */}
          {/*    비밀번호를 잊으셨나요? */}
          {/*  </Label> */}
          {/*  <Link to={ROUTES.SIGN_IN_FORGOT_PASSWORD} style={{ textDecoration: 'none' }}> */}
          {/*    <Label type="P2" color={theme.color.primary.Azure} style={{ marginLeft: '16px' }}> */}
          {/*      비밀번호 변경 */}
          {/*    </Label> */}
          {/*  </Link> */}
          {/* </ForgotContainer> */}
          <div style={{ padding: '32px 0 0 0', clear: 'right' }}>
            <Button type="wide" label="로그인하기" isPrimary onClick={login} />
          </div>
        </SignInFormContainer>
        <BlockContainer>
          <SingleLine />
          <Label type="P2" color={theme.color.secondary.Moon}>
            or
          </Label>
          <SingleLine />
        </BlockContainer>
        <SignButtonContainer>
          <div style={{ marginBottom: '24px' }}>
            <SignButton siteType="google" buttonType="signin" onClick={googleLogin} />
          </div>
          <SignButton siteType="github" buttonType="signin" onClick={githubLogin} />
        </SignButtonContainer>
      </SignInContainer>
      {isLoading && <Loading />}
      <Modal type="empty" isOpen={isAlert} onClose={() => setAlert(false)}>
        <img src={SomulLogo} alt="소물 로고" style={{ width: '112.5px', height: '20px' }} />
        <Label type="H4" color={theme.color.primary.Azure} style={{ padding: '48px 0 16px 0' }}>
          로그인을 할 수 없어요 :(
        </Label>
        <Label type="P1" style={{ paddingBottom: '48px' }}>
          {alertDescription}
        </Label>
      </Modal>
    </>
  );
}
