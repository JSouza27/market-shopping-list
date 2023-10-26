import { Client } from '@notionhq/client';
import { IGetItemResponse } from '../../common/types/item';

const notion = new Client({
  auth: process.env.NOTION_TOKEN
});

export async function getItens() {
  const response = await notion.databases.query({
    database_id: process.env.LIST_DATA_BASE_ID || ''
  });

  const itens = response as unknown as IGetItemResponse;

  return itens.results.map((item) => ({
    id: item.id,
    unit: item.properties.unit.rich_text[0].plain_text,
    category: item.properties.category.relation[0].id,
    quantity: item.properties.quantity.number || 0,
    name: item.properties.name.title[0].plain_text,
    isChecked: item.properties.isChecked.checkbox
  }));
}
