export async function getCategories() {
  try {
    const response = await fetch(
      `https://api.notion.com/v1/databases/${process.env.CATEGORY_DATA_BASE_ID}/query`,
      {
        method: 'POST',
        headers: {
          accept: 'application/json',
          'Notion-Version': '2022-06-28',
          'content-type': 'application/json',
          Authorization: `Bearer ${process.env.NOTION_TOKEN}`
        }
      }
    ).then((resp) => resp.json());

    const result = response.results.map((category: any) => ({
      id: category.id,
      name: category.properties.name.title[0].plain_text,
      label: category.properties.label.rich_text[0].plain_text,
      color: category.properties.color.rich_text[0].plain_text
    }));

    return { data: result, success: true };
  } catch (error) {
    console.error(error);
    return { data: [], message: error, success: false };
  }
}
