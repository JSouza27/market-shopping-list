export async function getCategories() {
  const { data } = await fetch(`${process.env.BASE_URL}/category`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json'
    }
  }).then((resp) => resp.json());

  return data;
}
