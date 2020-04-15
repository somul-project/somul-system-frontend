import styled from 'styled-components';
import theme from 'theme';
import React from 'react';
// eslint-disable-next-line no-unused-vars
import { IBaseButton, IButton } from 'interfaces/frameworks/web/components/atoms/Button/IButton';


const BaseButton = styled.button`
  font-family: 'Muli', 'Noto Sans KR', sans-serif;
  background-color: ${(props: IBaseButton) => (props.isPrimary ? theme.color.primary.Scarlet : theme.color.primary.Black)};
  color: ${theme.color.primary.White} !important;
  border: none;
  outline: none;
  cursor: pointer;
  border-radius: 10px;
  font-size: 16px;
  transition: all 0.2s;
  
  &:hover {
     background-color: ${(props: IBaseButton) => (props.isPrimary ? theme.color.primary.Salmon : theme.color.secondary.Nickel)};
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

export default class Button extends React.PureComponent<IButton> {
  render() {
    const {
      type, label, isPrimary, onClick, style,
    } = this.props;

    const ButtonComponent = BUTTONS[type ?? 'default'];

    return (
      <ButtonComponent
        isPrimary={isPrimary}
        onClick={onClick}
        style={style}
      >
        {label}
      </ButtonComponent>
    );
  }
}
