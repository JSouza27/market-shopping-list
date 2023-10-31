export interface IItem {
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
  request_id: string;
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
  isChecked: IsChecked;
  unit: Unit;
  price: Price;
  category: Category;
  quantity: Quantity;
  name: Name;
}

export interface IsChecked {
  id: string;
  type: string;
  checkbox: boolean;
}

export interface Unit {
  id: string;
  type: string;
  rich_text: RichText[];
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

export interface Price {
  id: string;
  type: string;
  number: number;
}

export interface Category {
  id: string;
  type: string;
  relation: Relation[];
  has_more: boolean;
}

export interface Relation {
  id: string;
}

export interface Quantity {
  id: string;
  type: string;
  number: number;
}

export interface Name {
  id: string;
  type: string;
  title: Title[];
}

export interface Title {
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
