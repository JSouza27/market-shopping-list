import { Client } from '@notionhq/client';
import { NextRequest, NextResponse } from 'next/server';

const notion = new Client({
  auth: process.env.NOTION_TOKEN
});

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();

    const response = await notion.pages.create({
      parent: {
        database_id: '7f73dd0a07984143b66fcac849acacc3'
      },
      properties: {
        name: {
          type: 'title',
          title: [
            {
              type: 'text',
              text: {
                content: body.name
              }
            }
          ]
        },
        quantity: {
          type: 'number',
          number: Number(body.quantity)
        },
        unit: {
          rich_text: [
            {
              text: {
                content: body.unit
              }
            }
          ]
        },
        category: {
          relation: [{ id: body.category.id }]
        }
      }
    });

    return NextResponse.json(response);
  } catch (error) {
    console.error(error);
    return NextResponse.json({ message: error, success: false });
  }
}

export async function PUT(req: NextRequest) {
  try {
    const { id, data } = await req.json();
    const response = await notion.pages.update({
      page_id: id,
      properties: data
    });
    return NextResponse.json(response);
  } catch (error) {
    console.error(error);
    return NextResponse.json({ message: error, success: false });
  }
}

export async function DELETE(req: NextRequest) {
  try {
    const { id } = await req.json();
    const options = {
      method: 'DELETE',
      headers: {
        accept: 'application/json',
        'Notion-Version': '2022-06-28',
        'content-type': 'application/json',
        Authorization: `Bearer ${process.env.NOTION_TOKEN}`
      }
    };
    const response = await fetch(
      `https://api.notion.com/v1/blocks/${id}`,
      options
    );

    return NextResponse.json(response);
  } catch (error) {
    console.error(error);
    return NextResponse.json({ message: error, success: false });
  }
}
