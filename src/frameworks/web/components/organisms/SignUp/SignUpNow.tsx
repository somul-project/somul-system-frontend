import React from 'react';
import styled from 'styled-components';
import theme from 'theme';
import { Link } from 'react-router-dom';
import DividedCard from 'frameworks/web/components/molecules/DividedCard/DividedCard';
import Label from 'frameworks/web/components/atoms/Label/Label';
import TextField from 'frameworks/web/components/atoms/TextField/TextField';
import TextArea from 'frameworks/web/components/atoms/TextArea/TextArea';
import Button from 'frameworks/web/components/atoms/Button/Button';
import CheckBox from 'frameworks/web/components/atoms/CheckBox/CheckBox';
// eslint-disable-next-line no-unused-vars
import { ISignUpNowState } from 'interfaces/frameworks/web/components/organisms/SignUp/ISignUpNow';

const TextLabelContainer = styled.div`
  width: 65px;
  float: left;
  text-align: right;
`;

const TextFieldContainer = styled.div`
  width: 445px;
  float: right;
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
  margin: 24px 0;
  display: flex;
  justify-content: space-between;
`;

const PrivacyContainer = styled.div`
  margin-bottom: 112px;
  clear: both;
`;

export default class SignInCard extends React.PureComponent<{}, ISignUpNowState> {
  constructor(props: Readonly<{}>) {
    super(props);
    this.state = {
      name: '',
      email: '',
      phone: '',
      password: '',
      rePassword: '',
      isPrivacyChecked: false,
    };
  }

  signupTry = () => {
    const {
      name, email, phone, password, rePassword,
    } = this.state;
    // eslint-disable-next-line no-undef, no-alert
    alert(`test : ${name} / ${email} / ${phone} / ${password} / ${rePassword}`);
  }

  render() {
    const { isPrivacyChecked } = this.state;
    return (
      <DividedCard title="SIGN UP NOW">
        {{
          left: (
            <div>
              <img
                src="signup-illustration.png"
                alt="회원가입 이미지"
                style={{ width: '380px', height: '580px', margin: '73px 0 18px 0' }}
              />
              <Label type="P1" color={theme.color.primary.White}>SOMUL 가입을 환영합니다 :)</Label>
            </div>
          ),
          right: (
            <div style={{ margin: '0 95px' }}>
              <TextLabelContainer>
                <Label type="H5" style={{ marginTop: '14px', marginBottom: '54px' }} color={theme.color.secondary.Nickel}>이름</Label>
                <Label type="H5" color={theme.color.secondary.Nickel}>이메일</Label>
                <Label type="H5" style={{ marginTop: '82px', marginBottom: '56px' }} color={theme.color.secondary.Nickel}>휴대폰</Label>
                <Label type="H5" color={theme.color.secondary.Nickel}>비밀번호</Label>
              </TextLabelContainer>
              <TextFieldContainer>
                <TextField
                  defaultLabel="이름을 입력하세요"
                  onValueChange={(value) => this.setState({ name: value })}
                  style={{ width: 'auto', marginBottom: '24px' }}
                />
                <TextField
                  defaultLabel="이메일을 입력하세요"
                  onValueChange={(value) => this.setState({ email: value })}
                  style={{ width: 'auto' }}
                />
                <WarningTextContainer>
                  <img src="warning.svg" alt="경고 아이콘" style={{ width: '20px', height: '18px' }} />
                  <div style={{ display: 'flex' }}>
                    <Label type="P2" color={theme.color.alert.Warning}>인증메일</Label>
                    <Label type="P2" color={theme.color.secondary.Moon}>을 발송할 예정이니, 유효한 메일을 입력해주세요.</Label>
                  </div>
                </WarningTextContainer>
                <TextField
                  defaultLabel="휴대폰 번호를 입력하세요 (000-0000-0000)"
                  onValueChange={(value) => this.setState({ phone: value })}
                  style={{ width: 'auto', clear: 'right' }}
                />
                <PasswordContainer>
                  <div style={{ width: '210px' }}>
                    <TextField
                      defaultLabel="비밀번호를 입력하세요"
                      onValueChange={(value) => this.setState({ password: value })}
                      style={{ width: 'auto' }}
                    />
                  </div>
                  <div style={{ width: '210px' }}>
                    <TextField
                      defaultLabel="비밀번호를 재입력하세요"
                      onValueChange={(value) => this.setState({ rePassword: value })}
                      style={{ width: 'auto' }}
                    />
                  </div>
                </PasswordContainer>
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
              <Link to="/signup/complete">
                <Button type="wide" label="회원가입하기" isPrimary={false} onClick={this.signupTry} />
              </Link>
            </div>
          ),
        }}
      </DividedCard>
    );
  }
}
