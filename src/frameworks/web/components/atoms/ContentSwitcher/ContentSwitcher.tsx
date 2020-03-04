import styled from 'styled-components';
import theme from 'theme';
import React from 'react';

interface IBaseButtonContentButton {
  active: boolean
}

interface IButtonContentButton extends IBaseButtonContentButton {
  edge: 'left' | 'right' | 'none'
}

interface IContentSwitcher {
  index: number
  labels: string[]
}

const BaseContentButton = styled.button`
  font-family: 'Muli', 'Noto Sans KR', sans-serif;
  font-weight: bold;
  background-color: ${(props: IButtonContentButton) => (props.active ? theme.color.primary.Azure : theme.color.secondary.Ash)};
  color: ${(props: IBaseButtonContentButton) => (props.active ? theme.color.primary.White : theme.color.secondary.Nickel)} !important;
  width: 364px;
  height: 56px;
  border: none;
  outline: none;
  cursor: pointer;
  font-size: 16px;
  transition: all 0.2s;
  
  &:hover {
     background-color: ${theme.color.primary.Sky};
     color: ${theme.color.primary.White} !important;
  }
`;

const ContentSwitcherContainer = styled.div`
  ${BaseContentButton}:not(:last-child) {
    margin-right: 9px;
  }
`;


const EdgeContentButton = styled(BaseContentButton)`
  border-top-left-radius: ${(props: IButtonContentButton) => (props.edge === 'left' ? '10px' : '4px')};
  border-bottom-left-radius: ${(props: IButtonContentButton) => (props.edge === 'left' ? '10px' : '4px')};
  border-top-right-radius: ${(props: IButtonContentButton) => (props.edge === 'right' ? '10px' : '4px')};
  border-bottom-right-radius: ${(props: IButtonContentButton) => (props.edge === 'right' ? '10px' : '4px')};
`;

export default class ContentSwitcher extends React.PureComponent<IContentSwitcher> {
  render() {
    const { index, labels } = this.props;

    return (
      <ContentSwitcherContainer>
        <EdgeContentButton edge="left" active={index === 1}>{labels[0]}</EdgeContentButton>
        <EdgeContentButton edge="none" active={index === 2}>{labels[1]}</EdgeContentButton>
        <EdgeContentButton edge="right" active={index === 3}>{labels[2]}</EdgeContentButton>
      </ContentSwitcherContainer>
    );
  }
}
