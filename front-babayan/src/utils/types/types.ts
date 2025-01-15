export interface IArticleCard {
  title: string;
  text: string;
  tags: string;
  autor: string;
  img?: string;
  img_2x?: string;
  date: string;
  views: string;
}
export interface ISvgProps {
  width?: string;
  height?: string;
  fill?: string;
}

export interface IDropdownOpt {
  displayName: string;
  nestedOpt: IDropdownOpt[];
}
export interface ArticleData extends IArticleCard {
  id: string;
}
