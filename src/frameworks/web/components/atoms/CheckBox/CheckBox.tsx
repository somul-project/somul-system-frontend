import styled from 'styled-components';
import React from 'react';
// eslint-disable-next-line no-unused-vars
import { IBaseCheckBox, ICheckBox } from 'interfaces/frameworks/web/components/atoms/CheckBox/ICheckBox';
import theme from 'theme';
import { LabelH5 } from 'frameworks/web/components/atoms/Label/Label';

const HiddenCheckBox = styled.input.attrs<IBaseCheckBox>({ type: 'checkbox' })`
  border: 0;
  clip: rect(0 0 0 0);
  clippath: inset(50%);
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
  background: ${(props: IBaseCheckBox) => (props.checked ? theme.color.primary.Azure : 'transparent')};
  border-radius: 3px;
  border: ${(props: IBaseCheckBox) => `2px solid ${props.checked ? theme.color.primary.Azure : theme.color.primary.Black}`};
  transition: all 150ms;
  
  ${Icon} {
    visibility: ${(props: IBaseCheckBox) => (props.checked ? 'visible' : 'hidden')}
  }
`;

const CheckBoxContainer = styled.div`
  display: inline-block;
  vertical-align: middle;
  cursor: pointer;
`;

export default class CheckBox extends React.PureComponent<ICheckBox> {
  render() {
    const {
      className, label, onChange, checked,
    } = this.props;

    return (
    // eslint-disable-next-line jsx-a11y/label-has-associated-control
      <label>
        <CheckBoxContainer className={className}>
          <HiddenCheckBox checked={checked} onChange={onChange} />
          <StyledCheckBox style={{ marginTop: '-3px' }} checked={checked}>
            <Icon viewBox="0 0 24 24">
              <path d="M9 16.2L4.8 12l-1.4 1.4L9 19 21 7l-1.4-1.4L9 16.2z" />
            </Icon>
          </StyledCheckBox>
        </CheckBoxContainer>
        <LabelH5 style={{ display: 'inline-block', paddingLeft: '16px', userSelect: 'none' }}>{label}</LabelH5>
      </label>
    );
  }
}
