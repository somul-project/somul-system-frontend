import React from 'react';
import styled from 'styled-components';
import theme from 'theme';
import {
  // eslint-disable-next-line no-unused-vars
  IRadioButton,
  IRadioButtonContainer,
  IRadioButtonElement,
} from 'interfaces/frameworks/web/components/atoms/RadioButton/IRadioButton';

const RadioButtonContainer = styled.div`
  margin-right: ${(props: IRadioButtonContainer) => (props.edge !== 'right' ? '36px' : '0')};
  margin-left: ${(props: IRadioButtonContainer) => (props.edge !== 'left' ? '36px' : '0')};
`;

const RadioButtonInput = styled.input`
  &:checked,
  &:not(:checked) {
    position: absolute;
    left: -9999px;
  }
  &:checked + label,
  &:not(:checked) + label {
    position: relative;
    padding-left: 40px;
    cursor: pointer;
    line-height: 20px;
    display: inline-block;
  }
  &:checked + label:before,
  &:not(:checked) + label:before {
    content: '';
    position: absolute;
    left: 0;
    top: 2px;
    width: 20px;
    height: 20px;
    border: 1.8px solid
      ${(props: IRadioButtonElement) =>
        props.disabled ? theme.color.secondary.Moon : theme.color.primary.Black};
    border-radius: 100%;
    background: ${theme.color.primary.White};
  }
  &:checked + label:after,
  &:not(:checked) + label:after {
    content: '';
    width: 10px;
    height: 10px;
    background: ${(props: IRadioButtonElement) =>
      props.disabled ? theme.color.secondary.Moon : theme.color.primary.Black};
    position: absolute;
    top: 7px;
    left: 5px;
    border-radius: 100%;
    -webkit-transition: all 0.3s ease;
    transition: all 0.3s ease;
  }
  &:not(:checked) + label:after {
    opacity: 0;
  }
  &:checked + label:after {
    opacity: 1;
  }
`;

const RadioButtonLabel = styled.label`
  padding-top: 2px;
  font-family: 'Muli', 'Noto Sans KR', sans-serif;
  margin: 0;
  color: ${(props: IRadioButtonElement) =>
    props.disabled ? theme.color.secondary.Moon : theme.color.primary.Black};
  font-weight: bold;
  font-size: 16px;
  letter-spacing: 0;
  line-height: 26px;
`;

export default class RadioButton extends React.PureComponent<IRadioButton> {
  render() {
    const { label, id, name, value, onRadioClick, edge, disabled } = this.props;

    return (
      <RadioButtonContainer edge={edge}>
        <RadioButtonInput
          type="radio"
          id={id}
          name={name}
          value={value}
          onClick={() => onRadioClick(label)}
          disabled={disabled}
        />
        <RadioButtonLabel htmlFor={id} disabled={disabled}>
          {label}
        </RadioButtonLabel>
      </RadioButtonContainer>
    );
  }
}
