// eslint-disable-next-line no-unused-vars
import React, { ReactNode } from 'react';
import styled from 'styled-components';
import RadioButton from 'frameworks/web/components/atoms/RadioButton/RadioButton';
import {
  // eslint-disable-next-line no-unused-vars
  IRadioGroup,
} from 'interfaces/frameworks/web/components/molecules/RadioGroup/IRadioGroup';
import {
  // eslint-disable-next-line no-unused-vars
  edgeType,
} from 'interfaces/frameworks/web/components/atoms/RadioButton/IRadioButton';

const RadioGroupContainer = styled.div`
  display: flex;
`;

export default class RadioGroup extends React.PureComponent<IRadioGroup> {
  render() {
    const radioElements: ReactNode[] = [];
    const { id, data, onDataSelectChange, disabled } = this.props;

    data.forEach((d, i) => {
      let edge: edgeType;

      if (i === 0) {
        edge = 'left';
      } else if (i === data.length - 1) {
        edge = 'right';
      } else {
        edge = 'none';
      }
      radioElements.push(
        <RadioButton
          label={d}
          id={id.concat(i.toString())}
          name={id}
          value={d}
          edge={edge}
          onRadioClick={onDataSelectChange}
          disabled={disabled}
        />,
      );
    });

    return <RadioGroupContainer>{radioElements}</RadioGroupContainer>;
  }
}
