import styled from 'styled-components';
import React from 'react';
import theme from 'theme';
// eslint-disable-next-line no-unused-vars
import { ITextField, ITextFieldElement } from 'interfaces/frameworks/web/components/atoms/TextField/ITextField';

const InputBox = styled.input`
  font-family: 'Muli', 'Noto Sans KR', sans-serif;
  font-size: 14px;
  font-weight: normal;
  background-color:
    ${(props: ITextFieldElement) => (props.isFocus ? theme.color.primary.White : theme.color.secondary.Snow)};
  width: 100%;
  margin-left: ${(props: ITextFieldElement) => (props.isFocus ? '22px' : '24px')};
  margin-right: ${(props: ITextFieldElement) => (props.isFocus ? '22px' : '24px')};
  outline: none;
  border: none;
  line-height: 2;
`;

const TextFieldContainer = styled.div`
  width: 255px;
  height: 56px;
  border:
    ${(props: ITextFieldElement) => (props.isFocus ? '2px solid '.concat(theme.color.primary.Azure) : '0')};
  border-radius: 10px;
  background-color:
    ${(props: ITextFieldElement) => (props.isFocus ? theme.color.primary.White : theme.color.secondary.Snow)};
  display: flex;
  align-items: center;
`;

export default class TextField extends React.PureComponent<ITextField, ITextFieldElement> {
  constructor(props: ITextField) {
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
      defaultLabel, style, type, readOnly,
    } = this.props;
    const { isFocus } = this.state;

    return (
      <TextFieldContainer isFocus={isFocus} style={style}>
        <InputBox
          type={type ?? 'text'}
          placeholder={defaultLabel}
          isFocus={isFocus}
          onFocus={() => this.onFocus()}
          onBlur={() => this.onBlur()}
          onChange={(event) => this.onLabelChange(event.target.value)}
          readOnly={readOnly ?? false}
        />
      </TextFieldContainer>
    );
  }
}
