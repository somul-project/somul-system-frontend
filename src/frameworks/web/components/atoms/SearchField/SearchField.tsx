import React, { useState } from 'react';
import styled from 'styled-components';
import theme from 'theme';

import {
  _ISearchFieldContainer,
  ISearchField,
  ISearchFieldState,
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
  border: 1px solid
    ${(props: _ISearchFieldContainer) =>
      props.isFocus ? theme.color.primary.Azure : theme.color.secondary.Moon};
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

export default function SearchField(props: ISearchField): React.ReactElement {
  const { onValueChange, defaultLabel, onSearchButtonClick } = props;

  const [state, setState] = useState<ISearchFieldState>({ isFocus: false });

  const onFocus = () => {
    setState({ isFocus: true });
  };

  const onBlur = () => {
    setState({ isFocus: false });
  };

  const onLabelChange = (value: string) => {
    if (onValueChange) onValueChange(value);
  };

  return (
    <SearchFieldContainer isFocus={state.isFocus}>
      <InputBox
        placeholder={defaultLabel}
        onFocus={onFocus}
        onBlur={onBlur}
        onChange={(event) => onLabelChange(event.target.value)}
      />
      <SearchButton viewBox="0 0 24 24" onClick={onSearchButtonClick}>
        <path d="M15.5 14h-.79l-.28-.27a6.51 6.51 0 10-.7.7l.27.28v.79l5 4.99L20.49 19zm-6 0A4.5 4.5 0 1114 9.5 4.494 4.494 0 019.5 14z" />
      </SearchButton>
    </SearchFieldContainer>
  );
}
