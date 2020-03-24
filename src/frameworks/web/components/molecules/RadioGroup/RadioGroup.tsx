import React from 'react';
import styled from 'styled-components';
import RadioButton from 'frameworks/web/components/atoms/RadioButton/RadioButton';
// eslint-disable-next-line no-unused-vars
import { IRadioGroup } from 'interfaces/frameworks/web/components/molecules/RadioGroup/IRadioGroup';
// eslint-disable-next-line no-unused-vars
import { edgeType } from 'src/interfaces/frameworks/web/components/atoms/RadioButton/IRadioButton';

const RadioGroupContainer = styled.div`
  display: flex;
`;

export default class RadioGroup extends React.PureComponent<IRadioGroup> {
  render() {
    const radioElements: JSX.Element[] = [];
    const {
      id, data, onDataSelectChange,
    } = this.props;

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
        />,
      );
    });

    return (
      <RadioGroupContainer>
        {radioElements}
      </RadioGroupContainer>
    );
  }
}
