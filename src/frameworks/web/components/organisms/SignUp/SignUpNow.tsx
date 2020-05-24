/* eslint-disable react/no-unused-state */
/* eslint-disable no-undef */
import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import styled from 'styled-components';
// @ts-ignore
import scrollTo from 'scroll-to';
import theme from 'theme';
import DividedCard from 'frameworks/web/components/molecules/DividedCard/DividedCard';
import Label from 'frameworks/web/components/atoms/Label/Label';
import TextField from 'frameworks/web/components/atoms/TextField/TextField';
import TextArea from 'frameworks/web/components/atoms/TextArea/TextArea';
import Button from 'frameworks/web/components/atoms/Button/Button';
import CheckBox from 'frameworks/web/components/atoms/CheckBox/CheckBox';
import Modal from 'frameworks/web/components/molecules/Modal/Modal';

import SomulLogo from 'assets/logo/logo.svg';
import WarningIcon from 'assets/icon/warning.svg';
import SignUpIllust from 'assets/illust/signup-illustration.png';
import { IRegisterUserValidateState } from 'interfaces/utils/IValidator';
import { isEmail, isName, isPhoneNumber, isValidPassword } from 'utils/validator';
import Loading from 'frameworks/web/components/atoms/Loading/Loading';
import SignUpRequest from 'service/request/SignUpRequest';
import useCurrentSession from 'frameworks/web/hooks/CurrentSessionHook';

import * as ROUTES from 'utils/routes';
import { PRIVACY_INFORMATION } from 'utils/constants';

const TextLabelContainer = styled.div`
  width: 65px;
  float: left;
  text-align: right;
`;

const TextFieldContainer = styled.div`
  width: 445px;
  float: right;
  padding-bottom: 24px;
`;

const WarningTextContainer = styled.div`
  float: right;
  width: 361px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 6px 0 24px 0;
`;

const PasswordContainer = styled.div`
  margin: 24px 0 8px 0;
  display: flex;
  justify-content: space-between;
`;

const PrivacyContainer = styled.div`
  margin-bottom: 112px;
  clear: both;
`;

export default function SignUpNow(): React.ReactElement {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [password, setPassword] = useState('');
  const [rePassword, setRePassword] = useState('');
  const [isAgreeLicense, setAgreeLicense] = useState(false);

  const [isRegisterButtonEnabled, setRegisterButtonEnabled] = useState(false);

  const [isLoading, setLoading] = useState(false);
  const [isAlert, setAlert] = useState(false);
  const [alertDescription, setAlertDescription] = useState('');

  const routerHistory = useHistory();
  const [isCurrentSessionLoaded, currentSession] = useCurrentSession();

  // -1 : 초기 상태, 0 : 유저가 입력하려고 포커스까진 했음, 1: 오류, 2: 정상
  const [validate, setValidate] = useState<IRegisterUserValidateState>({
    nameValidStatus: -1,
    emailValidStatus: -1,
    phoneNumberValidStatus: -1,
    passwordValidStatus: -1,
  });

  const [isOAuthStep, setOAuthStep] = useState(false);

  const openAlert = (description: string) => {
    setAlert(true);
    setAlertDescription(description);
  };

  // OAuth 인증일 경우, 비밀번호와 이메일은 입력받지 않으며, 무조건 정상 처리
  const bypassValidationDataForOAuthStep = () => {
    setValidate({ ...validate, passwordValidStatus: 2, emailValidStatus: 2 });
  };

  const validateInputData = (type: 'name' | 'email' | 'phoneNumber' | 'password') => {
    if (type === 'name') {
      setValidate({ ...validate, nameValidStatus: isName(name) ? 2 : 1 });
    } else if (type === 'email') {
      if (isOAuthStep) {
        setValidate({ ...validate, emailValidStatus: 2 });
      } else {
        setValidate({ ...validate, emailValidStatus: isEmail(email) ? 2 : 1 });
      }
    } else if (type === 'phoneNumber') {
      setValidate({ ...validate, phoneNumberValidStatus: isPhoneNumber(phoneNumber) ? 2 : 1 });
    } else if (type === 'password') {
      if (isOAuthStep) {
        setValidate({ ...validate, passwordValidStatus: 2 });
      } else if (password.length > 0 && rePassword.length > 0) {
        setValidate({
          ...validate,
          passwordValidStatus:
            password === rePassword && isValidPassword(password) && isValidPassword(rePassword)
              ? 2
              : 1,
        });
      }
    }
  };

  const checkAllDataValidated = (): boolean => {
    // @ts-ignore
    const isFieldPass = Object.keys(validate).filter((key) => validate[key] !== 2).length === 0;
    setRegisterButtonEnabled(isFieldPass && isAgreeLicense);

    return isFieldPass && isAgreeLicense;
  };

  const checkCurrentSessionIsOAuth = () => {
    if (currentSession) {
      // @ts-ignore
      if (Object.keys(currentSession!).filter((v) => currentSession![v] != null).length === 2) {
        // @ts-ignore
        // eslint-disable-next-line no-underscore-dangle
        if (currentSession!.email && currentSession!.__typename === 'GetSession') {
          setOAuthStep(true);
          setEmail(currentSession!.email);
        }
      }
    }
  };

  useEffect(() => {
    if (isOAuthStep) {
      bypassValidationDataForOAuthStep();
    }
  }, [isOAuthStep]);

  useEffect(() => {
    checkAllDataValidated();
  }, [validate, isAgreeLicense]);

  useEffect(() => {
    checkCurrentSessionIsOAuth();
  }, [currentSession]);

  const signUpTry = async () => {
    const signupPayload = { name, email, phonenumber: phoneNumber.replace(/-/gi, ''), password };

    if (!checkAllDataValidated()) {
      return;
    }

    scrollTo(0, 0);
    setLoading(true);

    try {
      const result = await SignUpRequest.signUp(signupPayload);
      const resultData = result.data!;

      if (resultData.result.statusCode !== '0') {
        openAlert(resultData.result.errorMessage);
        setLoading(false);
      } else if (isOAuthStep) {
        routerHistory.replace(ROUTES.HOME, { oAuthComplete: true });
      } else {
        routerHistory.push(ROUTES.SIGN_UP_COMPLETE, { email });
      }
    } catch (e) {
      openAlert('계속 되지 않을 경우, 소물 팀에 문의 부탁드립니다!');
      setLoading(false);
    }
  };

  return (
    <>
      <DividedCard
        title={!isOAuthStep ? 'SIGN UP NOW' : '추가 정보를 입력해주세요!'}
        leftPadding={isOAuthStep ? '77px 0 7px 0' : undefined}
      >
        {{
          left: (
            <div>
              <img
                src={SignUpIllust}
                alt="회원가입 이미지"
                style={{ width: '380px', height: '580px', margin: '73px 0 18px 0' }}
              />
              {!isOAuthStep && (
                <Label
                  type="P1"
                  color={theme.color.primary.White}
                  style={{ paddingBottom: '28px' }}
                >
                  SOMUL 가입을 환영합니다 :)
                </Label>
              )}
            </div>
          ),
          right: (
            <div style={{ margin: '0 95px' }}>
              <TextLabelContainer>
                <Label
                  type="H5"
                  style={{ marginTop: '14px', marginBottom: '54px' }}
                  color={theme.color.secondary.Nickel}
                >
                  이름
                </Label>
                <Label type="H5" color={theme.color.secondary.Nickel}>
                  이메일
                </Label>
                <Label
                  type="H5"
                  style={{ marginTop: !isOAuthStep ? '82px' : '54px', marginBottom: '56px' }}
                  color={theme.color.secondary.Nickel}
                >
                  휴대폰
                </Label>
                {!isOAuthStep && (
                  <Label type="H5" color={theme.color.secondary.Nickel}>
                    비밀번호
                  </Label>
                )}
              </TextLabelContainer>
              <TextFieldContainer>
                <TextField
                  defaultLabel="이름을 입력하세요"
                  onValueChange={(value) => setName(value)}
                  onFocusChanged={(value) => {
                    if (!value) validateInputData('name');
                  }}
                  style={{ width: 'auto' }}
                  isError={validate.nameValidStatus === 1}
                />
                <div style={{ height: '24px' }} />
                <TextField
                  value={email}
                  defaultLabel="이메일을 입력하세요"
                  onValueChange={(value) => setEmail(value)}
                  onFocusChanged={(value) => {
                    if (!value) validateInputData('email');
                  }}
                  isError={validate.emailValidStatus === 1}
                  style={{ width: 'auto' }}
                  readOnly={isOAuthStep}
                />
                {!isOAuthStep && (
                  <WarningTextContainer>
                    <img
                      src={WarningIcon}
                      alt="경고 아이콘"
                      style={{ width: '20px', height: '18px' }}
                    />
                    <div style={{ display: 'flex' }}>
                      <Label type="P2" color={theme.color.alert.Warning}>
                        인증메일
                      </Label>
                      <Label type="P2" color={theme.color.secondary.Moon}>
                        을 발송할 예정이니, 유효한 메일을 입력해주세요.
                      </Label>
                    </div>
                  </WarningTextContainer>
                )}
                <TextField
                  defaultLabel="휴대폰 번호를 입력하세요 (010-1234-5678)"
                  onValueChange={(value) => setPhoneNumber(value)}
                  onFocusChanged={(value) => {
                    if (!value) validateInputData('phoneNumber');
                  }}
                  isError={validate.phoneNumberValidStatus === 1}
                  style={{
                    width: 'auto',
                    clear: 'right',
                    marginTop: !isOAuthStep ? '0px' : '22px',
                  }}
                />
                {!isOAuthStep && (
                  <>
                    <PasswordContainer>
                      <div style={{ width: '210px' }}>
                        <TextField
                          defaultLabel="비밀번호를 입력하세요"
                          onValueChange={(value) => setPassword(value)}
                          onFocusChanged={(value) => {
                            if (!value) validateInputData('password');
                          }}
                          isError={validate.passwordValidStatus === 1}
                          style={{ width: 'auto' }}
                          type="password"
                        />
                      </div>
                      <div style={{ width: '210px' }}>
                        <TextField
                          defaultLabel="비밀번호를 재입력하세요"
                          onValueChange={(value) => setRePassword(value)}
                          onFocusChanged={(value) => {
                            if (!value) validateInputData('password');
                          }}
                          isError={validate.passwordValidStatus === 1}
                          style={{ width: 'auto' }}
                          type="password"
                        />
                      </div>
                    </PasswordContainer>
                    <Label type="P2" color={theme.color.secondary.Moon} style={{ float: 'right' }}>
                      비밀번호는 8글자 이상의 숫자와 문자 조합이어야 합니다.
                    </Label>
                  </>
                )}
              </TextFieldContainer>
              <PrivacyContainer>
                <TextArea
                  defaultLabel={PRIVACY_INFORMATION}
                  onValueChange={() => undefined}
                  readOnly
                />
                <div style={{ float: 'right', marginTop: '16px' }}>
                  <CheckBox
                    label="위 약관을 자세히 읽었으며, 개인정보처리방침에 동의합니다."
                    checked={isAgreeLicense}
                    onChange={() => {
                      setAgreeLicense(!isAgreeLicense);
                    }}
                  />
                </div>
              </PrivacyContainer>
              <Button
                type="wide"
                label="회원가입"
                isPrimary={false}
                isEnabled={isRegisterButtonEnabled}
                onClick={signUpTry}
              />
            </div>
          ),
        }}
      </DividedCard>
      {(!isCurrentSessionLoaded || isLoading) && <Loading />}
      <Modal type="empty" isOpen={isAlert} onClose={() => setAlert(false)}>
        <img src={SomulLogo} alt="소물 로고" style={{ width: '112.5px', height: '20px' }} />
        <Label type="H4" color={theme.color.primary.Azure} style={{ padding: '48px 0 16px 0' }}>
          회원가입을 진행할 수 없어요 :(
        </Label>
        <Label type="P1" style={{ paddingBottom: '48px' }}>
          {alertDescription}
        </Label>
      </Modal>
    </>
  );
}
