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
import {
  ISpeakerApplyStep2,
  ISpeakerApplyStep2State,
} from 'interfaces/frameworks/web/components/organisms/SpeakerApply/ISpeakerApplyStep2';

const TextLabelContainer = styled.div`
  width: 78px;
  float: left;
  text-align: right;
`;

const TextFieldContainer = styled.div`
  width: 445px;
  float: right;
  padding-bottom: 64px;
`;

const LinkAddButton = styled.div`
  width: 445px;
  height: 56px;
  margin-top: 8px;
  border-radius: 10px;
  border: solid 1px ${theme.color.secondary.Ash};
  cursor: pointer;
`;

const LinkAddButtonContainer = styled.div`
  width: 104px;
  height: 24px;
  margin: 16px auto;
  display: flex;
  justify-content: space-between;
`;

const AddImg = styled.img`
  width: 24px;
  height: 24px;
`;

export default class SpeakerApplyStep2 extends React.PureComponent<
  ISpeakerApplyStep2,
  ISpeakerApplyStep2State
> {
  sessionName: HTMLInputElement | undefined;

  sessionDesc: HTMLTextAreaElement | undefined;

  constructor(props: Readonly<ISpeakerApplyStep2>) {
    super(props);
    this.state = {
      linkArray: [''],
    };
  }

  handleLinkChange = (location: number, data: string) => {
    const { handleChange } = this.props;
    const { linkArray } = this.state;
    linkArray[location] = data;
    this.setState({
      linkArray,
    });
    handleChange('youtube', JSON.stringify(linkArray));
  };

  addLinkField = () => {
    const { handleChange } = this.props;
    const { linkArray } = this.state;
    linkArray.push('');
    this.setState({
      linkArray,
    });
    handleChange('youtube', JSON.stringify(linkArray));
    this.forceUpdate();
  };

  delLinkField = () => {
    const { handleChange } = this.props;
    const { linkArray } = this.state;
    linkArray.pop();
    this.setState({
      linkArray,
    });
    handleChange('youtube', JSON.stringify(linkArray));
    this.forceUpdate();
  };

  render() {
    const { currentStep, onSubmit } = this.props;
    const { linkArray } = this.state;
    if (currentStep !== 2) {
      return null;
    }
    return (
      <DividedCard title="STEP 02" leftPadding="60px 0 80px 0">
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
            <div style={{ margin: '0 95px 0 83px' }}>
              <TextLabelContainer>
                <Label type="H5" style={{ marginTop: '14px' }} color={theme.color.secondary.Nickel}>
                  강연 제목
                </Label>
                <Label
                  type="H5"
                  style={{ margin: '54px 0 198px 0' }}
                  color={theme.color.secondary.Nickel}
                >
                  강연 내용
                </Label>
                <Label type="H5" color={theme.color.secondary.Nickel}>
                  유튜브 링크
                </Label>
              </TextLabelContainer>
              <TextFieldContainer>
                <TextField
                  customRef={(instance: HTMLInputElement | null) => {
                    this.sessionName = instance!;
                  }}
                  defaultLabel="강연 제목을 입력하세요 (공백포함 최대 50자)"
                  onValueChange={() => {
                    // if (FormService.checkTextLength(this.sessionName!, 50)) {
                    //   handleChange('sessionName', data);
                    // }
                  }}
                  style={{ width: 'auto' }}
                />
                <TextArea
                  customRef={(instance: HTMLTextAreaElement | null) => {
                    this.sessionDesc = instance!;
                  }}
                  defaultLabel="강연 내용을 입력하세요 (공백포함 최대 500자)"
                  onValueChange={() => {
                    // if (FormService.checkTextLength(this.sessionDesc!, 500)) {
                    //   handleChange('sessionDesc', data);
                    // }
                  }}
                  height={200}
                  style={{ width: 'auto', margin: '24px 0' }}
                />
                <TextField
                  defaultLabel="강연 링크를 입력하세요"
                  onValueChange={(data: string) => this.handleLinkChange(0, data)}
                  style={{ width: 'auto' }}
                />
                {linkArray.length >= 2 && (
                  <TextField
                    defaultLabel="강연 링크를 입력하세요"
                    onValueChange={(data: string) => this.handleLinkChange(1, data)}
                    style={{ width: 'auto', marginTop: '8px' }}
                    isButton
                    buttonSrc="icon/highlight-off.svg"
                    onButtonClicked={this.delLinkField}
                  />
                )}
                {linkArray.length === 3 && (
                  <TextField
                    defaultLabel="강연 링크를 입력하세요"
                    onValueChange={(data: string) => this.handleLinkChange(2, data)}
                    style={{ width: 'auto', marginTop: '8px' }}
                    isButton
                    buttonSrc="icon/highlight-off.svg"
                    onButtonClicked={this.delLinkField}
                  />
                )}
                {linkArray.length !== 3 && (
                  <LinkAddButton onClick={() => this.addLinkField()}>
                    <LinkAddButtonContainer>
                      <AddImg src="icon/add-circle.svg" />
                      <Label type="H5" color={theme.color.secondary.Nickel}>
                        링크 추가
                      </Label>
                    </LinkAddButtonContainer>
                  </LinkAddButton>
                )}
                <Label
                  type="P2"
                  color={theme.color.secondary.Moon}
                  style={{ float: 'right', paddingTop: '8px' }}
                >
                  ※ 재생시간이 15분 이상인 경우, 영상을 분할하여 올리는 것을 추천합니다.
                </Label>
              </TextFieldContainer>
              <Button
                type="wide"
                label="제출하기"
                isPrimary
                onClick={() => onSubmit()}
                style={{ float: 'right' }}
              />
            </div>
          ),
        }}
      </DividedCard>
    );
  }
}
