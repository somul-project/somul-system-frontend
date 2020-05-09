export interface IDropdown {
  defaultLabel: string;
  data: string[];
  onDataSelectChange?: (data: string) => void;
}

export interface _IDropdownContainer {
  isOpened: boolean;
}

export interface _IDropdownList {
  isSelected: boolean;
  onClick: (idx: number) => void;
}

export interface IDropdownState {
  isOpened: boolean;
  selectedData: string | undefined;
}
