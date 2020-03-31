import styled from 'styled-components';
import React from 'react';
import theme from 'theme';
// eslint-disable-next-line no-unused-vars
import { ITextArea, ITextAreaElement } from 'interfaces/frameworks/web/components/atoms/TextArea/ITextArea';

const InputBox = styled.textarea`
  font-family: 'Muli', 'Noto Sans KR', sans-serif;
  font-size: 14px;
  font-weight: normal;
  background-color:
    ${(props: ITextAreaElement) => (props.isFocus ? theme.color.primary.White : theme.color.secondary.Snow)};
  width: 100%;
  height: 164px;
  resize: none;
  margin:
    ${(props: ITextAreaElement) => (props.isFocus ? '14px 0 14px 22px' : '16px 0 16px 24px')};
  padding:
    ${(props: ITextAreaElement) => (props.isFocus ? '0 22px 0 0' : '0 24px 0 0')};
  outline: none;
  border: none;
  line-height: 1.71;
`;

const TextAreaContainer = styled.div`
  width: 540px;
  height: 196px;
  border:
    ${(props: ITextAreaElement) => (props.isFocus ? '2px solid '.concat(theme.color.primary.Azure) : '0')};
  border-radius: 10px;
  background-color:
    ${(props: ITextAreaElement) => (props.isFocus ? theme.color.primary.White : theme.color.secondary.Snow)};
  display: flex;
`;

export default class TextArea extends React.PureComponent<ITextArea, ITextAreaElement> {
  constructor(props: ITextArea) {
    super(props);

    this.state = {
      isFocus: false,
    };
  }

  onFocus() {
    this.setState({
      isFocus: true,
    });
  }

  onBlur() {
    this.setState({
      isFocus: false,
    });
  }

  onLabelChange(value: string) {
    const { onValueChange } = this.props;
    onValueChange(value);
  }

  render() {
    const { defaultLabel } = this.props;
    const { isFocus } = this.state;

    return (
      <TextAreaContainer isFocus={isFocus}>
        <InputBox
          placeholder={defaultLabel}
          isFocus={isFocus}
          onFocus={() => this.onFocus()}
          onBlur={() => this.onBlur()}
          onChange={(event) => this.onLabelChange(event.target.value)}
        />
      </TextAreaContainer>
    );
  }
}
