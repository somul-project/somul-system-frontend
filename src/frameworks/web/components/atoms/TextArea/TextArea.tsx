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
    ${(props: ITextAreaElement) => (props.isFocus && !props.readOnly ? theme.color.primary.White : theme.color.secondary.Snow)};
  width: 100%;
  padding: 18px 24px;
  resize: none;
  margin:
    ${(props: ITextAreaElement) => (props.isFocus && !props.readOnly ? '14px 0 14px 22px' : '16px 0 16px 24px')};
  padding:
    ${(props: ITextAreaElement) => (props.isFocus && !props.readOnly ? '0 22px 0 0' : '0 24px 0 0')};
  outline: none;
  border: none;
  line-height: 1.71;
`;

const TextAreaContainer = styled.div`
  width: 540px;
  height: ${(props: ITextAreaElement) => `${props.height ?? 196}px`};
  border:
    ${(props: ITextAreaElement) => (props.isFocus && !props.readOnly ? '2px solid '.concat(theme.color.primary.Azure) : '0')};
  border-radius: 10px;
  background-color:
    ${(props: ITextAreaElement) => (props.isFocus && !props.readOnly ? theme.color.primary.White : theme.color.secondary.Snow)};
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
    const {
      defaultLabel, readOnly, height, style, customRef,
    } = this.props;
    const { isFocus } = this.state;

    return (
      <TextAreaContainer
        isFocus={isFocus}
        readOnly={readOnly ?? false}
        height={height}
        style={style}
      >
        <InputBox
          placeholder={defaultLabel}
          isFocus={isFocus}
          onFocus={() => this.onFocus()}
          onBlur={() => this.onBlur()}
          onChange={(event) => this.onLabelChange(event.target.value)}
          readOnly={readOnly ?? false}
          ref={customRef}
        />
      </TextAreaContainer>
    );
  }
}
