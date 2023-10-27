export async function getItens() {
  const { data } = await fetch(`${process.env.BASE_URL}/item`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json'
    },
    next: { revalidate: 30 }
  }).then((resp) => resp.json());

  return data;
}
