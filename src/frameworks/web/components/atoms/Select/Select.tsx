import styled from 'styled-components';
import theme from 'theme';
import React from 'react';
import {
  // eslint-disable-next-line no-unused-vars
  ISelect, ISelectElement, EdgeType, ISelectState,
} from 'interfaces/frameworks/web/components/atoms/Select/ISelect';

const SelectElement = styled.button`
  font-family: 'Muli', 'Noto Sans KR', sans-serif;
  font-size: 16px;

  border: solid 2px ${(props: ISelectElement) => (props.active ? theme.color.primary.Azure : theme.color.secondary.Ash)};
  background-color: ${(props: ISelectElement) => (props.active ? theme.color.primary.Azure : theme.color.secondary.Ash)};
  color: ${(props: ISelectElement) => (props.active ? theme.color.primary.White : theme.color.secondary.Coal)};

  width: 100%;
  height: 56px;
  outline: none;
  transition: all 0.2s;
  
  margin-left: ${(props: ISelectElement) => (props.edge === 'left' ? '0px' : '2px')};
  margin-right: ${(props: ISelectElement) => (props.edge === 'right' ? '0px' : '2px')};
  border-top-left-radius: ${(props: ISelectElement) => (props.edge === 'left' ? '10px' : '4px')};
  border-bottom-left-radius: ${(props: ISelectElement) => (props.edge === 'left' ? '10px' : '4px')};
  border-top-right-radius: ${(props: ISelectElement) => (props.edge === 'right' ? '10px' : '4px')};
  border-bottom-right-radius: ${(props: ISelectElement) => (props.edge === 'right' ? '10px' : '4px')};
  
  &:hover {
    border: solid 2px ${theme.color.primary.Azure};
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

export default class Select extends React.PureComponent<ISelect, ISelectState> {
  constructor(props: Readonly<ISelect>) {
    super(props);
    this.state = {
      selectNumber: -1,
    };
  }

  handleClick(i: number) {
    const { onElementClick } = this.props;
    const { selectNumber } = this.state;
    if (i === selectNumber) {
      onElementClick(-1);
      this.setState({
        selectNumber: -1,
      });
    } else {
      onElementClick(i);
      this.setState({
        selectNumber: i,
      });
    }
  }

  render() {
    const { labels } = this.props;
    const { selectNumber } = this.state;
    const selectElements: any[] = [];

    labels.forEach((label, i) => {
      let edge: EdgeType = 'none';
      let active: boolean = false;

      if (i === 0) {
        edge = 'left';
      } else if (i === labels.length - 1) {
        edge = 'right';
      }

      if (selectNumber === i) {
        active = true;
      }

      selectElements.push(
        <div>
          <SelectElement edge={edge} active={active} onClick={() => this.handleClick(i)}>
            {label}
          </SelectElement>
        </div>,
      );
    });

    return (
      <SelectContainer>
        {selectElements}
      </SelectContainer>
    );
  }
}
