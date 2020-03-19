export interface ISearchField {
  defaultLabel: string
  onValueChange?: (value?: string) => void
  onSearchButtonClick?: () => void
}

export interface ISearchFieldState {
  isFocus: boolean
}

export interface _ISearchFieldContainer {
  isFocus: boolean
}
