import Header from '../components/Header';
import { CategoryType } from '../common/types/category';
import Home, { HomeProps } from '../templates/Home';
import selectIcon from '../utils/SelectIcon';
import { IGetItemResponse, ItemChecklistType } from '../common/types/item';

export default async function Index() {
  const { data: categoryData } = await fetch(
    `${process.env.BASE_URL}/category`,
    {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json'
      }
    }
  ).then((resp) => resp.json());

  const { data: listData } = await fetch(`${process.env.BASE_URL}/item`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json'
    },
    cache: 'no-store'
  }).then((resp) => resp.json());

  const categoriesMapped: CategoryType[] = categoryData.map(
    (category: CategoryType) => {
      return {
        ...category,
        icon: selectIcon(category.label)
      };
    }
  );

  const unitOfMeasurement: CategoryType[] = [
    { id: '1', name: 'UN', label: 'unidade' },
    { id: '2', name: 'L', label: 'litro' },
    { id: '3', name: 'KG', label: 'Kg' }
  ];

  const itensMapped: ItemChecklistType[] = listData.map(
    (item: IGetItemResponse) => ({
      ...item,
      category: categoriesMapped.find((el) => el.id === item.category)
    })
  );

  const props: HomeProps = {
    units: unitOfMeasurement,
    categories: categoriesMapped,
    listItens: itensMapped
  };

  return (
    <>
      <Header />
      <Home {...props} />
    </>
  );
}
