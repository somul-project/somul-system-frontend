import styled from 'styled-components';
// eslint-disable-next-line no-unused-vars
import React, { ReactNode } from 'react';
import theme from 'theme';
import {
  // eslint-disable-next-line no-unused-vars
  _IDropdownContainer, _IDropdownList, IDropdown, IDropdownState,
} from 'interfaces/frameworks/web/components/atoms/Dropdown/IDropdown';

const DropdownContainer = styled.div<_IDropdownContainer>`
  width: 350px;
  height: 56px;
  border-radius: 10px;
  border: 1px solid 
    ${(props) => (props.isOpened ? theme.color.primary.Azure : theme.color.secondary.Moon)};
  cursor: pointer;
  user-select: none;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

const LabelForSelected = styled.p`
  font-family: 'Muli', 'Noto Sans KR', sans-serif;
  font-size: 16px;
  font-weight: bold;
  margin-left: 24px;
`;

const Arrow = styled.svg`
  width: 24px;
  height: 24px;
  margin-right: 16px;
`;

const DropdownUnorderedList = styled.ul`
  font-family: 'Muli', 'Noto Sans KR', sans-serif;
  font-weight: bold;
  list-style: none;
  margin: 8px;
  padding: 0;
`;

const DropdownList = styled.li<_IDropdownList>`
  line-height: 44px;
  cursor: pointer;
  padding-left: 16px;
  background: transparent;
  border-radius: 10px;
  transition: 0.1s background;
  
  color: ${(props) => (props.isSelected ? theme.color.primary.Azure : theme.color.primary.Black)};
  
  &:hover {
    background: ${theme.color.secondary.Snow};
  }
`;

const DropdownListContainer = styled.div`
  position: absolute;
  top: 70px;
  width: 350px;
  overflow: ${(props: _IDropdownContainer) => (props.isOpened ? 'auto' : 'hidden')};
  max-height: ${(props: _IDropdownContainer) => (props.isOpened ? '184px' : '0')};
  border-radius: 10px;
  box-shadow: 0 3px 3px 0 rgba(128, 128, 128, 0.1);
  opacity: ${(props: _IDropdownContainer) => (props.isOpened ? '1' : '0')};
  border: ${(props: _IDropdownContainer) => (props.isOpened ? '1px' : '0px')} solid ${theme.color.secondary.Ash};
  background-color: ${theme.color.primary.White};
  transition: all 0.5s;
  -ms-overflow-style: none;
  
  &::-webkit-scrollbar {
    display: none;
  }
`;

export default class Dropdown extends React.PureComponent<IDropdown, IDropdownState> {
  constructor(props: IDropdown) {
    super(props);

    this.state = {
      isOpened: false,
      selectedData: undefined,
    };
  }

  onDropdownContainerClick() {
    const { isOpened } = this.state;

    this.setState({
      isOpened: !isOpened,
    });
  }

  onDropdownListClick(idx: number) {
    const { data, onDataSelectChange } = this.props;
    const { selectedData } = this.state;

    const userSelectedData = data.filter((d) => d === data[idx])[0];

    if (onDataSelectChange) {
      if (selectedData !== userSelectedData) {
        onDataSelectChange(userSelectedData);
      }
    }

    this.setState({
      selectedData: userSelectedData,
    });
  }

  render() {
    const { defaultLabel, data } = this.props;
    const { selectedData, isOpened } = this.state;

    const listElement: ReactNode[] = [];

    data.forEach((d, idx) => {
      listElement.push(
        <DropdownList
          onClick={() => this.onDropdownListClick(idx)}
          isSelected={selectedData === data[idx]}
        >
          {d}
        </DropdownList>,
      );
    });

    return (
      <DropdownContainer isOpened={isOpened} onClick={() => this.onDropdownContainerClick()}>
        <LabelForSelected>{selectedData ?? defaultLabel}</LabelForSelected>
        <Arrow viewBox="0 0 24 24">
          <path d="M7.41 8.59L12 13.17l4.59-4.58L18 10l-6 6-6-6z" />
        </Arrow>
        <DropdownListContainer isOpened={isOpened}>
          <DropdownUnorderedList>
            {listElement}
          </DropdownUnorderedList>
        </DropdownListContainer>
      </DropdownContainer>
    );
  }
}
