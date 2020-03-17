import React from 'react';
import styled from 'styled-components';
import theme from 'theme';
import { LabelH5 } from 'frameworks/web/components/atoms/Label/Label';

interface IRadioButton {
  label: string
  id: string
  name: string
  value: string
}

const RadioButtonInput = styled.input`
  &:checked,
  &:not(:checked) {
      position: absolute;
      left: -9999px;
  }
  &:checked + label,
  &:not(:checked) + label
  {
      position: relative;
      padding-left: 40px;
      cursor: pointer;
      line-height: 20px;
      display: inline-block;
      color: ${theme.color.primary.White};
  }
  &:checked + label:before,
  &:not(:checked) + label:before {
      content: '';
      position: absolute;
      left: 0;
      top: 2px;
      width: 20px;
      height: 20px;
      border: 1.8px solid ${theme.color.primary.Black};
      border-radius: 100%;
      background: ${theme.color.primary.White};
  }
  &:checked + label:after,
  &:not(:checked) + label:after {
      content: '';
      width: 10px;
      height: 10px;
      background: ${theme.color.primary.Black};
      position: absolute;
      top: 7px;
      left: 5px;
      border-radius: 100%;
      -webkit-transition: all 0.2s ease;
      transition: all 0.2s ease;
  }
  &:not(:checked) + label:after {
      opacity: 0;
      -webkit-transform: scale(0);
      transform: scale(0);
  }
  &:checked + label:after {
      opacity: 1;
      -webkit-transform: scale(1);
      transform: scale(1);
  }
`;

export default class RadioButton extends React.PureComponent<IRadioButton> {
  render() {
    const {
      label, id, name, value,
    } = this.props;

    return (
      <div style={{
        marginRight: '72px',
      }}
      >
        <RadioButtonInput type="radio" id={id} name={name} value={value} />
        <label htmlFor={id}>
          <LabelH5>{label}</LabelH5>
        </label>
      </div>
    );
  }
}
