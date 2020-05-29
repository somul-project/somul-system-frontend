import React, { useState } from 'react';
import styled from 'styled-components';
import theme from 'theme';

import {
  IOptionalLabelElement,
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
  margin: 0 22px;
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
  border: 2px solid
    ${(props: ITextFieldElement) =>
      // eslint-disable-next-line no-nested-ternary
      props.isError
        ? theme.color.alert.Failure
        : props.isFocus
        ? theme.color.primary.Azure
        : theme.color.secondary.Snow};
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
  cursor: pointer;
  margin-right: 24px;
`;

const OptionalLabel = styled.p<IOptionalLabelElement>`
  font-family: 'Muli', 'Noto Sans KR', sans-serif;
  position: absolute;
  font-size: 14px;
  font-weight: 500;
  margin: 0;
  text-align: left;
  color: ${(props) => (!props.isError ? theme.color.secondary.Moon : theme.color.alert.Failure)};
`;

export default function TextField(props: ITextField): React.ReactElement {
  const {
    defaultLabel,
    style,
    type = 'text',
    readOnly = false,
    value,
    isButton = false,
    isError,
    buttonSrc,
    onButtonClicked,
    onFocusChanged,
    onValueChange = null,
    customRef,
    optionalString,
    maxLength = 9999999,
  } = props;

  const [state, setState] = useState<ITextFieldElement>({ isFocus: false, isError: false });

  const onFocus = () => {
    setState({ isFocus: true });
    if (onFocusChanged) {
      onFocusChanged(true);
    }
  };

  const onBlur = () => {
    setState({ isFocus: false });
    if (onFocusChanged) {
      onFocusChanged(false);
    }
  };

  const onLabelChange = (newValue: string) => {
    if (maxLength >= newValue.length) {
      if (onValueChange) onValueChange(newValue);
    }
  };

  if (readOnly) {
    return (
      <TextFieldContainerDeactivate style={style}>
        <InputBoxDeactivate type={type ?? 'text'} placeholder={value} value={value} readOnly />
      </TextFieldContainerDeactivate>
    );
  }

  return (
    <div>
      <TextFieldContainerActivate isFocus={state.isFocus} style={style} isError={isError}>
        <InputBoxActivate
          ref={customRef}
          type={type ?? 'text'}
          placeholder={defaultLabel}
          isFocus={state.isFocus}
          isError={isError}
          onFocus={onFocus}
          onBlur={onBlur}
          onChange={(event) => onLabelChange(event.target.value)}
          value={value}
        />
        {isButton && <ImgButton src={buttonSrc} onClick={() => onButtonClicked!()} />}
      </TextFieldContainerActivate>
      {optionalString && <OptionalLabel isError={isError ?? false}>{optionalString}</OptionalLabel>}
    </div>
  );
}
