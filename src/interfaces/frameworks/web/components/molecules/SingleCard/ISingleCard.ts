export interface ISingleCard {
  title: string;
  buttonLabel: string[];
  buttonOnClick: Function[];
  children?: React.ReactNode;
}
