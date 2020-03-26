import styled from 'styled-components';
import React from 'react';
import theme from 'theme';
import {
  // eslint-disable-next-line no-unused-vars
  _ISearchFieldContainer, ISearchField, ISearchFieldState,
} from 'interfaces/frameworks/web/components/atoms/SearchField/ISearchField';

const InputBox = styled.input`
  width: 100%;
  font-family: 'Muli', 'Noto Sans KR', sans-serif;
  font-size: 16px;
  font-weight: normal;
  margin-left: 24px;
  margin-right: 12px;
  outline: none;
  border: none;
  line-height: 2;
`;

const SearchFieldContainer = styled.div`
   width: 350px;
   height: 56px;
   border: 1px solid ${(props: _ISearchFieldContainer) => (props.isFocus
    ? theme.color.primary.Azure : theme.color.secondary.Moon)};
   border-radius: 10px;
   display: flex;
   flex-direction: row;
   justify-content: space-between;
   align-items: center;
`;

const SearchButton = styled.svg`
  width: 24px;
  height: 24px;
  margin-right: 16px;
  cursor: pointer;
`;

export default class SearchField extends React.PureComponent<ISearchField, ISearchFieldState> {
  constructor(props: ISearchField) {
    super(props);

    this.state = {
      isFocus: false,
    };
  }

  onFocus() {
    this.setState({
      isFocus: true,
    });
  }


  onBlur() {
    this.setState({
      isFocus: false,
    });
  }

  onLabelChange(value: string) {
    const { onValueChange } = this.props;
    onValueChange!(value);
  }

  render() {
    const { defaultLabel, onSearchButtonClick } = this.props;
    const { isFocus } = this.state;

    return (
      <SearchFieldContainer isFocus={isFocus}>
        <InputBox
          placeholder={defaultLabel}
          onFocus={() => this.onFocus()}
          onBlur={() => this.onBlur()}
          onChange={(event) => this.onLabelChange(event.target.value)}
        />
        <SearchButton
          viewBox="0 0 24 24"
          onClick={onSearchButtonClick}
        >
          <path d="M15.5 14h-.79l-.28-.27a6.51 6.51 0 10-.7.7l.27.28v.79l5 4.99L20.49 19zm-6 0A4.5 4.5 0 1114 9.5 4.494 4.494 0 019.5 14z" />
        </SearchButton>
      </SearchFieldContainer>
    );
  }
}
