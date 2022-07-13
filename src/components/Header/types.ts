import { TBackdrops } from "../../store/reducers/fIlmSlice/types";

export type THeaderItem = {
  id: number;
  title: string;
  selectValue: Array<{title: string, path: string}>
};

export type TTypographyText = {
  id: number;
  text: string;
};

export type THeaderHideOnScrollProps = {
  window?: () => Window;
  children: React.ReactElement;
};
