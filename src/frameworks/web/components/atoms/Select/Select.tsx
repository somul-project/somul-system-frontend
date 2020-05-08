import React, { useState } from 'react';
import styled from 'styled-components';
import theme from 'theme';

import {
  ISelect,
  ISelectElement,
  EdgeType,
  ISelectState,
} from 'interfaces/frameworks/web/components/atoms/Select/ISelect';

const SelectElement = styled.button`
  font-family: 'Muli', 'Noto Sans KR', sans-serif;
  font-size: 16px;

  border: solid 2px
    ${(props: ISelectElement) =>
      props.active ? theme.color.primary.Azure : theme.color.secondary.Ash};
  background-color: ${(props: ISelectElement) =>
    props.active ? theme.color.primary.Azure : theme.color.secondary.Ash};
  color: ${(props: ISelectElement) =>
    props.active ? theme.color.primary.White : theme.color.secondary.Coal};

  width: 100%;
  height: 56px;
  outline: none;
  transition: all 0.2s;

  cursor: pointer;

  margin-left: ${(props: ISelectElement) => (props.edge === 'left' ? '0px' : '2px')};
  margin-right: ${(props: ISelectElement) => (props.edge === 'right' ? '0px' : '2px')};
  border-top-left-radius: ${(props: ISelectElement) => (props.edge === 'left' ? '10px' : '4px')};
  border-bottom-left-radius: ${(props: ISelectElement) => (props.edge === 'left' ? '10px' : '4px')};
  border-top-right-radius: ${(props: ISelectElement) => (props.edge === 'right' ? '10px' : '4px')};
  border-bottom-right-radius: ${(props: ISelectElement) =>
    props.edge === 'right' ? '10px' : '4px'};

  @media (hover: hover) {
    &:hover {
      border: solid 2px ${theme.color.primary.Azure};
    }
  }
`;

const SelectContainer = styled.div`
  display: flex;
  width: 158px;

  div {
    display: flex;
    flex-grow: 1;
    justify-content: center;
  }
`;

export default function Select(props: ISelect): React.ReactElement {
  const { labels, onElementClick } = props;

  const [state, setState] = useState<ISelectState>({ selectNumber: -1 });

  const handleClick = (i: number) => {
    const idx = i === state.selectNumber ? -1 : i;
    onElementClick(idx);
    setState({ selectNumber: i });
  };

  return (
    <SelectContainer>
      {labels.map((label, i) => {
        let edge: EdgeType;
        const active: boolean = state.selectNumber === i;

        if (i === 0) {
          edge = 'left';
        } else if (i === labels.length - 1) {
          edge = 'right';
        } else {
          edge = 'none';
        }

        return (
          <div key={label}>
            <SelectElement edge={edge} active={active} onClick={() => handleClick(i)}>
              {label}
            </SelectElement>
          </div>
        );
      })}
    </SelectContainer>
  );
}
