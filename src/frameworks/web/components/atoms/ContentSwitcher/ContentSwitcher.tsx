import styled from 'styled-components';
import theme from 'theme';
// eslint-disable-next-line no-unused-vars
import React, { ReactNode } from 'react';
import {
  // eslint-disable-next-line no-unused-vars
  EdgeType, IBaseButtonContentButton, IContentButton, IContentSwitcher,
} from 'interfaces/frameworks/web/components/atoms/ContentSwitcher/IContentSwitcher';

const BaseContentButton = styled.button`
  font-family: 'Muli', 'Noto Sans KR', sans-serif;
  font-weight: bold;
  background-color: ${(props: IContentButton) => (props.active ? theme.color.primary.Azure : theme.color.secondary.Ash)};
  color: ${(props: IBaseButtonContentButton) => (props.active ? theme.color.primary.White : theme.color.secondary.Nickel)} !important;
  width: 100%;
  height: 56px;
  border: none;
  outline: none;
  cursor: pointer;
  font-size: 16px;
  transition: all 0.2s;
  
  @media (hover: hover) {
    &:hover {
      background-color: ${theme.color.primary.Sky};
      color: ${theme.color.primary.White} !important;
    }
  }
`;

const ContentSwitcherContainer = styled.div`
  width: 1100px;
  
  .row {
    margin: 0;
    
    .col {
       padding: 0;
    }
  }
  
  .col:not(:last-child) {
    margin-right: 30px;
  }
`;

const EdgeContentButton = styled(BaseContentButton)`
  border-top-left-radius: ${(props: IContentButton) => (props.edge === 'left' ? '10px' : '4px')};
  border-bottom-left-radius: ${(props: IContentButton) => (props.edge === 'left' ? '10px' : '4px')};
  border-top-right-radius: ${(props: IContentButton) => (props.edge === 'right' ? '10px' : '4px')};
  border-bottom-right-radius: ${(props: IContentButton) => (props.edge === 'right' ? '10px' : '4px')};
`;

export default class ContentSwitcher extends React.PureComponent<IContentSwitcher> {
  render() {
    const { index, labels } = this.props;
    const contentButtons: ReactNode[] = [];

    labels.forEach((label, i) => {
      let edge: EdgeType;

      if (i === 0) {
        edge = 'left';
      } else if (i === labels.length - 1) {
        edge = 'right';
      } else {
        edge = 'none';
      }

      contentButtons.push(
        <div className="col">
          <EdgeContentButton edge={edge} active={i === index}>{label}</EdgeContentButton>
        </div>,
      );
    });

    return (
      <ContentSwitcherContainer>
        <div className="row">
          {contentButtons}
        </div>
      </ContentSwitcherContainer>
    );
  }
}
