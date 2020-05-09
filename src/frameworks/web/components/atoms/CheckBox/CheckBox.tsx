import React from 'react';
import styled from 'styled-components';
import theme from 'theme';

import {
  IBaseCheckBox,
  ICheckBox,
} from 'interfaces/frameworks/web/components/atoms/CheckBox/ICheckBox';
import Label from 'frameworks/web/components/atoms/Label/Label';

const HiddenCheckBox = styled.input.attrs<IBaseCheckBox>({ type: 'checkbox' })`
  border: 0;
  clip: rect(0 0 0 0);
  clip-path: inset(50%);
  height: 1px;
  margin: -1px;
  overflow: hidden;
  padding: 0;
  position: absolute;
  white-space: nowrap;
  width: 1px;
`;

const Icon = styled.svg`
  fill: none;
  stroke: ${theme.color.primary.White};
  stroke-width: 2px;
`;

const StyledCheckBox = styled.div`
  display: inline-block;
  width: 16px;
  height: 16px;
  background: ${(props: IBaseCheckBox) =>
    props.checked ? theme.color.primary.Azure : 'transparent'};
  border-radius: 3px;
  border: ${(props: IBaseCheckBox) =>
    `2px solid ${props.checked ? theme.color.primary.Azure : theme.color.primary.Black}`};
  transition: all 150ms;

  ${Icon} {
    visibility: ${(props: IBaseCheckBox) => (props.checked ? 'visible' : 'hidden')};
  }
`;

const CheckBoxContainer = styled.div`
  display: inline-block;
  vertical-align: middle;
  cursor: pointer;
`;

const LabelContainer = styled.div`
  display: inline-block;
  padding-left: 16px;
  user-select: none;
`;

export default function CheckBox({
  className,
  label,
  onChange,
  checked,
  disabled,
}: ICheckBox): React.ReactElement {
  return (
    // eslint-disable-next-line jsx-a11y/label-has-associated-control
    <label
      style={{
        opacity: disabled ? '0.5' : undefined,
        pointerEvents: disabled ? 'none' : 'inherit',
        boxSizing: 'unset',
      }}
    >
      <CheckBoxContainer className={className}>
        <HiddenCheckBox checked={checked} onChange={onChange} disabled={disabled} />
        <StyledCheckBox style={{ marginTop: '-3px' }} checked={checked}>
          <Icon viewBox="0 0 24 24">
            <path d="M9 16.2L4.8 12l-1.4 1.4L9 19 21 7l-1.4-1.4L9 16.2z" />
          </Icon>
        </StyledCheckBox>
      </CheckBoxContainer>
      <LabelContainer>
        <Label type="H5">{label}</Label>
      </LabelContainer>
    </label>
  );
}
