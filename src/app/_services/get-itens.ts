import 'server-only';
import { IGetItemResponse } from '../../common/types/item';

type GetItensType = {
  data: IGetItemResponse[] | [];
  success: boolean;
  message?: unknown;
};

export async function getItens(): Promise<GetItensType> {
  try {
    const response = await fetch(
      `https://api.notion.com/v1/databases/${process.env.LIST_DATA_BASE_ID}/query`,
      {
        method: 'POST',
        headers: {
          accept: 'application/json',
          'Notion-Version': '2022-06-28',
          'content-type': 'application/json',
          Authorization: `Bearer ${process.env.NOTION_TOKEN}`
        },
        cache: 'no-store'
      }
    ).then((resp) => resp.json());

    const list = response.results.map((item: any) => ({
      id: item.id,
      unit: item.properties.unit.rich_text[0].plain_text,
      category: item.properties.category.relation[0].id,
      quantity: item.properties.quantity.number || 0,
      name: item.properties.name.title[0].plain_text,
      isChecked: item.properties.isChecked.checkbox,
      price: item.properties.price.number
    }));

    return { data: list, success: true };
  } catch (error) {
    console.error(error);
    return { data: [], message: error, success: false };
  }
}
