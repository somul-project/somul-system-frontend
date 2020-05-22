import React from 'react';
import styled from 'styled-components';
import theme from 'theme';

import { IBaseButton, IButton } from 'interfaces/frameworks/web/components/atoms/Button/IButton';

const BaseButton = styled.button`
  font-family: 'Muli', 'Noto Sans KR', sans-serif;
  background-color: ${(props: IBaseButton) => props.bgColor};
  color: ${(props: IBaseButton) =>
    props.isEnabled ? theme.color.primary.White : theme.color.secondary.Moon} !important;
  border: 1px solid
    ${(props: IBaseButton) => (props.isEnabled ? props.bgColor : theme.color.secondary.Ash)};
  outline: none;
  cursor: ${(props: IBaseButton) => (props.isEnabled ? 'pointer' : 'inherit')};
  border-radius: 10px;
  font-size: 16px;
  transition: all 0.2s;

  @media (hover: hover) {
    &:hover {
      background-color: ${(props: IBaseButton) => props.hoverColor};
      border-color: ${(props: IBaseButton) =>
        props.isEnabled ? props.hoverColor : theme.color.secondary.Ash};
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
  onClick = () => undefined,
  isEnabled = true,
  style,
}: IButton): React.ReactElement {
  const ButtonComponent = BUTTONS[type];
  let bgColor: string;
  let hoverColor: string;
  if (!isEnabled) {
    bgColor = theme.color.primary.White;
    hoverColor = bgColor;
  } else if (isPrimary) {
    bgColor = theme.color.primary.Scarlet;
    hoverColor = theme.color.primary.Salmon;
  } else {
    bgColor = theme.color.primary.Black;
    hoverColor = theme.color.secondary.Nickel;
  }
  return (
    <ButtonComponent
      bgColor={bgColor}
      hoverColor={hoverColor}
      isEnabled={isEnabled}
      onClick={() => (isEnabled ? onClick() : undefined)}
      style={style}
    >
      {label}
    </ButtonComponent>
  );
}
