import React, { useState } from 'react';
import styled from 'styled-components';
import theme from 'theme';

import {
  ITextArea,
  ITextAreaElement,
} from 'interfaces/frameworks/web/components/atoms/TextArea/ITextArea';

const InputBox = styled.textarea`
  font-family: 'Muli', 'Noto Sans KR', sans-serif;
  font-size: 14px;
  font-weight: normal;
  background-color: ${(props: ITextAreaElement) =>
    props.isFocus && !props.readOnly ? theme.color.primary.White : theme.color.secondary.Snow};
  width: 100%;
  padding: 18px 24px;
  resize: none;
  margin: ${(props: ITextAreaElement) =>
    props.isFocus && !props.readOnly ? '14px 0 14px 22px' : '16px 0 16px 24px'};
  padding: ${(props: ITextAreaElement) =>
    props.isFocus && !props.readOnly ? '0 22px 0 0' : '0 24px 0 0'};
  outline: none;
  border: none;
  line-height: 1.71;
`;

const TextAreaContainer = styled.div`
  width: 540px;
  height: ${(props: ITextAreaElement) => `${props.height ?? 196}px`};
  border: ${(props: ITextAreaElement) =>
    props.isFocus && !props.readOnly ? '2px solid '.concat(theme.color.primary.Azure) : '0'};
  border-radius: 10px;
  background-color: ${(props: ITextAreaElement) =>
    props.isFocus && !props.readOnly ? theme.color.primary.White : theme.color.secondary.Snow};
  display: flex;
`;

export default function TextArea(props: ITextArea): React.ReactElement {
  const { defaultLabel, readOnly = false, height, style, customRef, onValueChange } = props;

  const [state, setState] = useState<ITextAreaElement>({ isFocus: false });

  const onFocus = () => {
    setState({ isFocus: true });
  };

  const onBlur = () => {
    setState({ isFocus: false });
  };

  const onLabelChange = (value: string) => {
    onValueChange(value);
  };

  return (
    <TextAreaContainer isFocus={state.isFocus} readOnly={readOnly} height={height} style={style}>
      <InputBox
        placeholder={defaultLabel}
        isFocus={state.isFocus}
        onFocus={onFocus}
        onBlur={onBlur}
        onChange={(event) => onLabelChange(event.target.value)}
        readOnly={readOnly}
        ref={customRef}
      />
    </TextAreaContainer>
  );
}
