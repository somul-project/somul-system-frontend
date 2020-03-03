import styled from 'styled-components';
import theme from 'theme';
import React from 'react';
import { IButton } from 'interfaces/frameworks/web/components/atoms/Button/IButton';

interface IBaseButton {
  isPrimary: boolean
  onClick: any
}


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
    width: 154px;
    height: 56px;
    color: ${(props) => props.color ?? theme.color.primary.Black};
`;

const FieldButton = styled(BaseButton)`
    width: 154px;
    height: 48px;
    color: ${(props) => props.color ?? theme.color.primary.Black};
`;

const SmallButton = styled(BaseButton)`
    width: 116px;
    height: 40px;
    font-size: 14px;
    color: ${(props) => props.color ?? theme.color.primary.Black};
`;

const WideButton = styled(BaseButton)`
    width: 350px;
    height: 70px;
    color: ${(props) => props.color ?? theme.color.primary.Black};
`;

const BUTTONS = {
  wide: WideButton,
  field: FieldButton,
  small: SmallButton,
  default: DefaultButton,
};

export default class Button extends React.PureComponent<IButton> {
  render() {
    const {
      type, label, isPrimary, onClick,
    } = this.props;

    const ButtonComponent = BUTTONS[type ?? 'default'];

    return <ButtonComponent isPrimary={isPrimary} onClick={onClick}>{label}</ButtonComponent>;
  }
}
