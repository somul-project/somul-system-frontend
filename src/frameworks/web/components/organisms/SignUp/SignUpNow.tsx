/* eslint-disable react/no-unused-state */
/* eslint-disable no-undef */
/* eslint-disable no-alert */
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

import SignUpIllust from 'assets/illust/signup-illustration.png';
import { IRegisterUserValidateState } from 'interfaces/utils/IValidator';
import { isEmail, isName, isPhoneNumber, isValidPassword } from 'utils/validator';
import Loading from 'frameworks/web/components/atoms/Loading/Loading';
import SignUpRequest from 'service/request/SignUpRequest';

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
  const emailFromQueryString = new URLSearchParams(window.location.search).get('email');

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [password, setPassword] = useState('');
  const [rePassword, setRePassword] = useState('');
  const [isAgreeLicense, setAgreeLicense] = useState(false);

  const [isEmailFieldEnabled, setEmailFieldEnabled] = useState(true);
  const [isRegisterButtonEnabled, setRegisterButtonEnabled] = useState(false);

  const [isLoading, setLoading] = useState(false);

  const routerHistory = useHistory();

  // -1 : 초기 상태, 0 : 유저가 입력하려고 포커스까진 했음, 1: 오류, 2: 정상
  const [validate, setValidate] = useState<IRegisterUserValidateState>({
    nameValidStatus: -1,
    emailValidStatus: -1,
    phoneNumberValidStatus: -1,
    passwordValidStatus: -1,
  });

  const checkAllDataValidated = (): boolean => {
    // @ts-ignore
    const isFieldPass = Object.keys(validate).filter((key) => validate[key] !== 2).length === 0;
    setRegisterButtonEnabled(isFieldPass && isAgreeLicense);

    return isFieldPass && isAgreeLicense;
  };

  const validateInputData = (type: 'name' | 'email' | 'phoneNumber' | 'password') => {
    if (type === 'name') {
      setValidate({ ...validate, nameValidStatus: isName(name) ? 2 : 1 });
    } else if (type === 'email') {
      setValidate({ ...validate, emailValidStatus: isEmail(email) ? 2 : 1 });
    } else if (type === 'phoneNumber') {
      setValidate({ ...validate, phoneNumberValidStatus: isPhoneNumber(phoneNumber) ? 2 : 1 });
    } else if (type === 'password') {
      if (password.length > 0 && rePassword.length > 0 && password !== rePassword) {
        setValidate({ ...validate, passwordValidStatus: 1 });
      } else {
        setValidate({ ...validate, passwordValidStatus: isValidPassword(password) ? 2 : 1 });
      }
    }
  };

  // 소셜 로그인 같은 경우, 계정에서 넘어온 이메일로 쓰도록
  useEffect(() => {
    if (emailFromQueryString?.length ?? -1 > 0) {
      validateInputData('email');
    }
  }, [email]);

  useEffect(() => {
    checkAllDataValidated();
  }, [validate, isAgreeLicense]);

  useEffect(() => {
    if (emailFromQueryString && emailFromQueryString.length > 0 && isEmail(emailFromQueryString)) {
      setEmail(emailFromQueryString);
      setEmailFieldEnabled(false);
    }
  }, []);

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
        alert(`회원가입을 진행할 수 없어요 :(\n${resultData.result.errorMessage}`);
        setLoading(false);
      } else {
        routerHistory.push('/signup/complete', { email });
      }
    } catch (e) {
      alert('회원가입을 진행할 수 없어요 :(\n계속 되지 않을 경우, 소물 팀에 문의 부탁드립니다!');
      setLoading(false);
    }
  };

  return (
    <div>
      <DividedCard title="SIGN UP NOW">
        {{
          left: (
            <div>
              <img
                src={SignUpIllust}
                alt="회원가입 이미지"
                style={{ width: '380px', height: '580px', margin: '73px 0 18px 0' }}
              />
              <Label type="P1" color={theme.color.primary.White} style={{ paddingBottom: '28px' }}>
                SOMUL 가입을 환영합니다 :)
              </Label>
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
                  style={{ marginTop: '82px', marginBottom: '56px' }}
                  color={theme.color.secondary.Nickel}
                >
                  휴대폰
                </Label>
                <Label type="H5" color={theme.color.secondary.Nickel}>
                  비밀번호
                </Label>
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
                  readOnly={!isEmailFieldEnabled}
                />
                <WarningTextContainer>
                  <img
                    src="warning.svg"
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
                <TextField
                  defaultLabel="휴대폰 번호를 입력하세요 (010-1234-5678)"
                  onValueChange={(value) => setPhoneNumber(value)}
                  onFocusChanged={(value) => {
                    if (!value) validateInputData('phoneNumber');
                  }}
                  isError={validate.phoneNumberValidStatus === 1}
                  style={{ width: 'auto', clear: 'right' }}
                />
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
              </TextFieldContainer>
              <PrivacyContainer>
                <TextArea
                  defaultLabel={`1. 개인정보 처리방침이란?
반갑습니다!
소프트웨어에 물들다(이하 ‘소물')는 참여자의 ‘동의를 기반으로 개인정보를 수집·이용 및 제공’하고 있으며, ‘이용자의 권리 (개인정보 자기결정권)를 적극적으로 보장’합니다. 소물은 정보통신서비스제공자가 준수하여야 하는 대한민국의 관계 법령 및 개인정보보호 규정, 가이드라인을 준수하고 있습니다. “개인정보 처리방침”이란 참여자의 소중한 개인정보를 보호함으로써 참여자가 안심하고 소물에 참여할 수 있도록 소물이 준수해야 할 지침을 의미합니다. 본 개인정보 처리방침은 소물 강연 참여 신청 시스템에 적용됩니다`}
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
      {isLoading && <Loading />}
    </div>
  );
}
