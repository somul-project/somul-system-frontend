/* eslint-disable react/no-unused-state */
/* eslint-disable no-undef */
/* eslint-disable no-alert */
import React, { useState } from 'react';
import styled from 'styled-components';
import theme from 'theme';
import DividedCard from 'frameworks/web/components/molecules/DividedCard/DividedCard';
import Label from 'frameworks/web/components/atoms/Label/Label';
import TextField from 'frameworks/web/components/atoms/TextField/TextField';
import Button from 'frameworks/web/components/atoms/Button/Button';
import { IProfile } from 'interfaces/frameworks/web/components/pages/Profile/IProfile';
import { IProfileInfoState } from 'interfaces/frameworks/web/components/organisms/Profile/IProfileInfo';

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

const onPasswordChangeClicked = () => {
  // 비밀번호 변경 버튼 클릭시 작동되는 함수
};

const onSaveButtonClicked = () => {
  // save 버튼 클릭시 작동되는 함수
};

const onWithdrawClicked = () => {
  // 회원탈퇴 버튼 클릭시 작동되는 함수
};

export default function ProfileInfo(props: IProfile): React.ReactElement {
  const { name, email, phone } = props;
  const [state, setState] = useState<IProfileInfoState>({ name, phone, password: '' });
  return (
    <div>
      <DividedCard title="PROFILE" leftPadding="70px 0 0 0">
        {{
          left: (
            <div>
              <img
                src="illust/speaker-apply-illustration.png"
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
                <Label type="H5" color={theme.color.secondary.Nickel}>
                  현재 비밀번호
                </Label>
              </TextLabelContainer>
              <TextFieldContainer>
                <TextField
                  defaultLabel="이름을 입력하세요"
                  onValueChange={(data: string) =>
                    setState({ name: data, phone: state.phone, password: state.password })
                  }
                  style={{ width: 'auto' }}
                  value={state.name}
                />
                <TextField
                  defaultLabel=""
                  onValueChange={() => undefined}
                  style={{ width: 'auto', margin: '24px 0' }}
                  readOnly
                  value={email}
                />
                <TextField
                  defaultLabel="전화번호를 입력하세요"
                  onValueChange={(data: string) =>
                    setState({ name: state.name, phone: data, password: state.password })
                  }
                  style={{ width: 'auto' }}
                  value={state.phone}
                />
                <div>
                  <Button
                    label="비밀번호 변경"
                    onClick={onPasswordChangeClicked}
                    style={{ float: 'right' }}
                  />
                  <TextField
                    defaultLabel="현재 비밀번호를 입력하세요"
                    onValueChange={(data: string) =>
                      setState({ name: state.name, phone: state.phone, password: data })
                    }
                    style={{ width: '250px', marginTop: '24px' }}
                    value={state.password}
                  />
                </div>
                <WarningTextContainer>
                  <img
                    src="warning.svg"
                    alt="경고 아이콘"
                    style={{ width: '20px', height: '18px' }}
                  />
                  <div style={{ display: 'flex' }}>
                    <Label type="P2" color={theme.color.alert.Warning}>
                      현재 비밀번호
                    </Label>
                    <Label type="P2" color={theme.color.secondary.Moon}>
                      를 입력하셔야 개인정보 수정을 완료할 수 있습니다.
                    </Label>
                  </div>
                </WarningTextContainer>
              </TextFieldContainer>
              <Button
                type="default"
                label="저장하기"
                isPrimary
                onClick={onSaveButtonClicked}
                style={{ float: 'right' }}
              />
            </div>
          ),
        }}
      </DividedCard>
      <div style={{ width: '1100px', margin: '0 auto' }}>
        <WithdrawContainer>
          <Label type="P1" color={theme.color.secondary.Nickel}>
            계정을 삭제하시겠습니까?
          </Label>
          <Label type="H5" color={theme.color.secondary.Nickel} onClick={onWithdrawClicked}>
            계정 삭제하기
          </Label>
        </WithdrawContainer>
      </div>
    </div>
  );
}
