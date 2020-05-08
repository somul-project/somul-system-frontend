import React, { useState } from 'react';
import styled from 'styled-components';
import theme from 'theme';

import {
  ITextField,
  ITextFieldElement,
} from 'interfaces/frameworks/web/components/atoms/TextField/ITextField';

const InputBoxBase = styled.input`
  font-family: 'Muli', 'Noto Sans KR', sans-serif;
  font-size: 14px;
  font-weight: normal;
  width: 100%;
  outline: none;
  border: none;
  line-height: 2;
`;

const InputBoxActivate = styled(InputBoxBase)`
  background-color: ${(props: ITextFieldElement) =>
    props.isFocus ? theme.color.primary.White : theme.color.secondary.Snow};
  margin: ${(props: ITextFieldElement) => (props.isFocus ? '0 22px' : '0 24px')};
`;

const InputBoxDeactivate = styled(InputBoxBase)`
  background-color: ${theme.color.primary.White};
  margin: 0 22px;
`;

const TextFieldContainerBase = styled.div`
  width: 255px;
  height: 56px;
  border-radius: 10px;
  display: flex;
  align-items: center;
`;

const TextFieldContainerActivate = styled(TextFieldContainerBase)`
  border: ${(props: ITextFieldElement) =>
    props.isFocus ? `2px solid ${theme.color.primary.Azure}` : '0'};
  background-color: ${(props: ITextFieldElement) =>
    props.isFocus ? theme.color.primary.White : theme.color.secondary.Snow};
`;

const TextFieldContainerDeactivate = styled(TextFieldContainerBase)`
  border: 2px solid ${theme.color.secondary.Ash};
  background-color: ${theme.color.primary.White};
`;

const ImgButton = styled.img`
  width: 24px;
  height: 24px;
  float: right;
  margin-right: ${(props: ITextFieldElement) => (props.isFocus ? '22px' : '24px')};
`;

export default function TextField(props: ITextField): React.ReactElement {
  const {
    defaultLabel,
    style,
    type,
    readOnly,
    value,
    isButton,
    buttonSrc,
    onButtonClicked,
    onValueChange,
    customRef,
  } = props;

  const [state, setState] = useState<ITextFieldElement>({ isFocus: false });

  const onFocus = () => {
    setState({ isFocus: true });
  };

  const onBlur = () => {
    setState({ isFocus: false });
  };

  const onLabelChange = (newValue: string) => {
    if (onValueChange) onValueChange(newValue);
  };

  if (readOnly) {
    return (
      <TextFieldContainerDeactivate style={style}>
        <InputBoxDeactivate type={type ?? 'text'} placeholder={value} value={value} readOnly />
      </TextFieldContainerDeactivate>
    );
  }

  return (
    <TextFieldContainerActivate isFocus={state.isFocus} style={style}>
      <InputBoxActivate
        ref={customRef}
        type={type ?? 'text'}
        placeholder={defaultLabel}
        isFocus={state.isFocus}
        onFocus={onFocus}
        onBlur={onBlur}
        onChange={(event) => onLabelChange(event.target.value)}
        value={value}
      />
      {isButton && (
        <ImgButton src={buttonSrc} onClick={() => onButtonClicked!()} isFocus={state.isFocus} />
      )}
    </TextFieldContainerActivate>
  );
}
