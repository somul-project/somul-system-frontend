/* eslint-disable react/no-unused-state */
/* eslint-disable no-undef */
/* eslint-disable no-alert */
import React from 'react';
import styled from 'styled-components';
import theme from 'theme';
import DividedCard from 'frameworks/web/components/molecules/DividedCard/DividedCard';
import Label from 'frameworks/web/components/atoms/Label/Label';
import TextField from 'frameworks/web/components/atoms/TextField/TextField';
import TextArea from 'frameworks/web/components/atoms/TextArea/TextArea';
import Button from 'frameworks/web/components/atoms/Button/Button';
import CheckBox from 'frameworks/web/components/atoms/CheckBox/CheckBox';
// eslint-disable-next-line no-unused-vars
import { RouteComponentProps } from 'react-router-dom';
import UserService from 'utils/user';
import { ERROR_MESSAGE } from 'utils/constants';
// eslint-disable-next-line no-unused-vars
import { ISignUpOAuthState } from 'interfaces/frameworks/web/components/organisms/SignUp/ISignUpOAuth';

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

const PrivacyContainer = styled.div`
  margin-bottom: 112px;
  clear: both;
`;

export default class SignUpOAuth
  extends React.PureComponent<RouteComponentProps, ISignUpOAuthState> {
  constructor(props: Readonly<RouteComponentProps>) {
    super(props);
    this.state = {
      name: '',
      email: '',
      phone: '',
      isPrivacyChecked: false,
    };
  }

  signupTry = async () => {
    const signupPayload = this.state;
    const valCheck = UserService.signUpOAuthValidationCheck(signupPayload);
    if (valCheck !== true) {
      alert(valCheck);
      return;
    }
    const signUpResult = await UserService.sendSignUpOAuthData(signupPayload);
    if (signUpResult === '0') {
      window.location.href = `/signup/complete?email=${signupPayload.email}`;
      return;
    }
    alert(ERROR_MESSAGE[signUpResult] ?? ERROR_MESSAGE['500']);
  }

  render() {
    const { isPrivacyChecked } = this.state;
    const { location } = this.props;

    const oauthEmail = new URLSearchParams(location.search).get('email');
    return (
      <DividedCard title="추가정보를 입력해주세요!">
        {{
          left: (
            <div>
              <img
                src="signup-illustration.png"
                alt="회원가입 이미지"
                style={{ width: '380px', height: '580px', marginTop: '15px' }}
              />
            </div>
          ),
          right: (
            <div style={{ margin: '0 95px' }}>
              <TextLabelContainer>
                <Label type="H5" style={{ marginTop: '14px' }} color={theme.color.secondary.Nickel}>이름</Label>
                <Label type="H5" style={{ margin: '54px 0' }} color={theme.color.secondary.Nickel}>이메일</Label>
                <Label type="H5" style={{ marginBottom: '56px' }} color={theme.color.secondary.Nickel}>휴대폰</Label>
              </TextLabelContainer>
              <TextFieldContainer>
                <TextField
                  defaultLabel="이름을 입력하세요"
                  onValueChange={(value) => this.setState({ name: value })}
                  style={{ width: 'auto' }}
                />
                <TextField
                  defaultLabel="이메일을 입력하세요"
                  onValueChange={(value) => this.setState({ email: value })}
                  style={{ width: 'auto', margin: '24px 0' }}
                  readOnly
                  value={oauthEmail ?? ''}
                />
                <TextField
                  defaultLabel="휴대폰 번호를 입력하세요 (01012345678)"
                  onValueChange={(value) => this.setState({ phone: value })}
                  style={{ width: 'auto', clear: 'right' }}
                />
              </TextFieldContainer>
              <PrivacyContainer>
                <TextArea
                  defaultLabel={
                    `1. 개인정보 처리방침이란?
반갑습니다!
소프트웨어에 물들다(이하 ‘소물')는 참여자의 ‘동의를 기반으로 개인정보를 수집·이용 및 제공’하고 있으며, ‘이용자의 권리 (개인정보 자기결정권)를 적극적으로 보장’합니다. 소물은 정보통신서비스제공자가 준수하여야 하는 대한민국의 관계 법령 및 개인정보보호 규정, 가이드라인을 준수하고 있습니다. “개인정보 처리방침”이란 참여자의 소중한 개인정보를 보호함으로써 참여자가 안심하고 소물에 참여할 수 있도록 소물이 준수해야 할 지침을 의미합니다. 본 개인정보 처리방침은 소물 강연 참여 신청 시스템에 적용됩니다`
                  }
                  onValueChange={() => undefined}
                  readOnly
                />
                <div style={{ float: 'right', marginTop: '16px' }}>
                  <CheckBox
                    label="위 약관을 자세히 읽었으며, 개인정보처리방침에 동의합니다."
                    checked={isPrivacyChecked}
                    onChange={() => this.setState({ isPrivacyChecked: !isPrivacyChecked })}
                  />
                </div>
              </PrivacyContainer>
              <Button type="wide" label="회원가입" isPrimary={false} onClick={this.signupTry} />
            </div>
          ),
        }}
      </DividedCard>
    );
  }
}
