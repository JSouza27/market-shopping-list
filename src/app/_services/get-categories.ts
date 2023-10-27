import 'server-only';

import { Client } from '@notionhq/client';
import { CategoriesResp } from '../../common/types/category';

const notion = new Client({
  auth: process.env.NOTION_TOKEN
});

export async function getCategories() {
  const response = await notion.databases.query({
    database_id: process.env.CATEGORY_DATA_BASE_ID || ''
  });

  const categories = response as unknown as CategoriesResp;

  return categories.results.map((category) => ({
    id: category.id,
    name: category.properties.name.title[0].plain_text,
    label: category.properties.label.rich_text[0].plain_text,
    color: category.properties.color.rich_text[0].plain_text
  }));
}
