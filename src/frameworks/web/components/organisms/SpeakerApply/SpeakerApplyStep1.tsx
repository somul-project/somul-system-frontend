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
// eslint-disable-next-line no-unused-vars
import { ISpeakerApplyStep1 } from 'interfaces/frameworks/web/components/organisms/SpeakerApply/ISpeakerApplyStep1';

const TextLabelContainer = styled.div`
  width: 65px;
  float: left;
  text-align: right;
`;

const TextFieldContainer = styled.div`
  width: 445px;
  float: right;
  padding-bottom: 48px;
`;

export default class SpeakerApplyStep1 extends React.PureComponent<ISpeakerApplyStep1> {
  render() {
    const {
      currentStep, handleChange, name, email, nextStep,
    } = this.props;
    if (currentStep !== 1) {
      return null;
    }
    return (
      <DividedCard title="STEP 01" leftPadding="60px 0 0 0">
        {{
          left: (
            <div>
              <img
                src="illust/speaker-apply-illustration.png"
                alt="강연자 지원 이미지"
                style={{ width: '380px', height: '450px', margin: '30px 0 0 0' }}
              />
            </div>
          ),
          right: (
            <div style={{ margin: '0 95px' }}>
              <TextLabelContainer>
                <Label type="H5" style={{ marginTop: '14px' }} color={theme.color.secondary.Nickel}>이름</Label>
                <Label type="H5" style={{ margin: '54px 0' }} color={theme.color.secondary.Nickel}>이메일</Label>
                <Label type="H5" color={theme.color.secondary.Nickel}>소개</Label>
              </TextLabelContainer>
              <TextFieldContainer>
                <TextField
                  defaultLabel="이름을 입력하세요"
                  onValueChange={() => undefined}
                  style={{ width: 'auto' }}
                  readOnly
                  value={name}
                />
                <TextField
                  defaultLabel="이메일을 입력하세요"
                  onValueChange={() => undefined}
                  style={{ width: 'auto', margin: '24px 0' }}
                  readOnly
                  value={email}
                />
                <TextArea
                  defaultLabel="간단한 이력 및 본인소개를 작성해주세요 (공백포함 최대 300자)"
                  onValueChange={(data: string) => handleChange('introduce', data)}
                  height={120}
                  style={{ width: 'auto' }}
                />
                <Label type="P2" color={theme.color.secondary.Moon} style={{ float: 'right', paddingTop: '8px' }}>※ 강연 당일 리스트에 노출되는 내용입니다.</Label>
              </TextFieldContainer>
              <Button type="default" label="다음" isPrimary={false} onClick={nextStep} style={{ float: 'right' }} />
            </div>
          ),
        }}
      </DividedCard>
    );
  }
}
