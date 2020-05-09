import React from 'react';
import styled from 'styled-components';
import theme from 'theme';

import { IBaseButton, IButton } from 'interfaces/frameworks/web/components/atoms/Button/IButton';

const BaseButton = styled.button`
  font-family: 'Muli', 'Noto Sans KR', sans-serif;
  background-color: ${(props: IBaseButton) =>
    props.isPrimary ? theme.color.primary.Scarlet : theme.color.primary.Black};
  color: ${theme.color.primary.White} !important;
  opacity: ${(props: IBaseButton) => (props.isEnabled ? '1' : '0.3')};
  border: none;
  outline: none;
  cursor: ${(props: IBaseButton) => (props.isEnabled ? 'pointer' : 'inherit')};
  border-radius: 10px;
  font-size: 16px;
  transition: all 0.2s;

  @media (hover: hover) {
    &:hover {
      background-color: ${(props: IBaseButton) =>
        props.isPrimary ? theme.color.primary.Salmon : theme.color.secondary.Nickel};
    }
  }
`;

const DefaultButton = styled(BaseButton)`
  height: 56px;
  padding: 0 48px;
  color: ${(props) => props.color ?? theme.color.primary.Black};
`;

const FieldButton = styled(BaseButton)`
  height: 48px;
  padding: 0 48px;
  color: ${(props) => props.color ?? theme.color.primary.Black};
`;

const SmallButton = styled(BaseButton)`
  height: 40px;
  padding: 0 32px;
  font-size: 14px;
  color: ${(props) => props.color ?? theme.color.primary.Black};
`;

const WideButton = styled(BaseButton)`
  font-weight: bold;
  width: 350px;
  height: 70px;
  color: ${(props) => props.color ?? theme.color.primary.Black};
`;

const MobileWideButton = styled(BaseButton)`
  width: 100%;
  height: 70px;
  text-align: center;
  border-radius: 0 0 20px 20px;
  color: ${(props) => props.color ?? theme.color.primary.Black};
`;

const BUTTONS = {
  wide: WideButton,
  field: FieldButton,
  small: SmallButton,
  default: DefaultButton,
  mobilewide: MobileWideButton,
};

export default function Button({
  type = 'default',
  label,
  isPrimary = false,
  onClick = null,
  isEnabled = true,
  style,
}: IButton): React.ReactElement {
  const ButtonComponent = BUTTONS[type];
  return (
    <ButtonComponent
      isPrimary={isPrimary}
      onClick={isEnabled ? onClick : undefined}
      isEnabled={isEnabled}
      style={style}
    >
      {label}
    </ButtonComponent>
  );
}
