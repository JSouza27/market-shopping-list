import { Client } from '@notionhq/client';
import { CategoriesResp } from '../../../common/types/category';
import { NextResponse } from 'next/server';

const notion = new Client({
  auth: process.env.NOTION_TOKEN
});

export async function GET() {
  try {
    const response = await notion.databases.query({
      database_id: process.env.CATEGORY_DATA_BASE_ID || ''
    });

    const categories = response as unknown as CategoriesResp;

    const result = categories.results.map((category) => ({
      id: category.id,
      name: category.properties.name.title[0].plain_text,
      label: category.properties.label.rich_text[0].plain_text,
      color: category.properties.color.rich_text[0].plain_text
    }));

    return NextResponse.json({ data: result, success: true });
  } catch (error) {
    console.error(error);
    return NextResponse.json({ data: [], message: error, success: false });
  }
}
