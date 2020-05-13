import React from 'react';
import styled from 'styled-components';

import RadioButton from 'frameworks/web/components/atoms/RadioButton/RadioButton';
import { IRadioGroup } from 'interfaces/frameworks/web/components/molecules/RadioGroup/IRadioGroup';
import { edgeType } from 'interfaces/frameworks/web/components/atoms/RadioButton/IRadioButton';

const RadioGroupContainer = styled.div`
  display: flex;
`;

export default function RadioGroup({
  id,
  data,
  onDataSelectChange,
  disabled,
}: IRadioGroup): React.ReactElement {
  return (
    <RadioGroupContainer>
      {data.map((d, i) => {
        let edge: edgeType;

        if (i === 0) {
          edge = 'left';
        } else if (i === data.length - 1) {
          edge = 'right';
        } else {
          edge = 'none';
        }
        return (
          <RadioButton
            key={d}
            label={d}
            id={id.concat(i.toString())}
            name={id}
            value={d}
            edge={edge}
            onRadioClick={onDataSelectChange}
            disabled={disabled}
          />
        );
      })}
    </RadioGroupContainer>
  );
}
