export type ColorType = 'pink' | 'orange' | 'yellow' | 'green' | 'blue';

export type CategoryType = {
  id: string;
  icon?: React.ReactNode | JSX.Element;
  name: string;
  label: string;
  color?: ColorType;
};

export interface CategoriesResp {
  object: string;
  results: Result[];
  next_cursor: any;
  has_more: boolean;
  type: string;
  page_or_database: PageOrDatabase;
  developer_survey: string;
  request_id: string;
}

export interface Result {
  object: string;
  id: string;
  created_time: string;
  last_edited_time: string;
  created_by: CreatedBy;
  last_edited_by: LastEditedBy;
  cover: any;
  icon: any;
  parent: Parent;
  archived: boolean;
  properties: Properties;
  url: string;
  public_url: any;
}

export interface CreatedBy {
  object: string;
  id: string;
}

export interface LastEditedBy {
  object: string;
  id: string;
}

export interface Parent {
  type: string;
  database_id: string;
}

export interface Properties {
  color: Color;
  label: Label;
  name: Name;
}

export interface Color {
  id: string;
  type: string;
  rich_text: {
    plain_text: ColorType;
  }[];
}

export interface RichText {
  type: string;
  text: Text;
  annotations: Annotations;
  plain_text: string;
  href: any;
}

export interface Text {
  content: string;
  link: any;
}

export interface Annotations {
  bold: boolean;
  italic: boolean;
  strikethrough: boolean;
  underline: boolean;
  code: boolean;
  color: string;
}

export interface Label {
  id: string;
  type: string;
  rich_text: RichText2[];
}

export interface RichText2 {
  type: string;
  text: Text2;
  annotations: Annotations2;
  plain_text: string;
  href: any;
}

export interface Text2 {
  content: string;
  link: any;
}

export interface Annotations2 {
  bold: boolean;
  italic: boolean;
  strikethrough: boolean;
  underline: boolean;
  code: boolean;
  color: string;
}

export interface Name {
  id: string;
  type: string;
  title: Title[];
}

export interface Title {
  type: string;
  text: Text3;
  annotations: Annotations3;
  plain_text: string;
  href: any;
}

export interface Text3 {
  content: string;
  link: any;
}

export interface Annotations3 {
  bold: boolean;
  italic: boolean;
  strikethrough: boolean;
  underline: boolean;
  code: boolean;
  color: string;
}

export interface PageOrDatabase {}
