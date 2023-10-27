import Header from '../components/Header';
import { CategoryType } from '../common/types/category';
import Home, { HomeProps } from '../templates/Home';
import { getCategories } from './_services/get-categories';
import selectIcon from '../utils/SelectIcon';
import { getItens } from './_services/get-itens';
import { ItemChecklistType } from '../common/types/item';

export default async function Index() {
  const categoryData = await getCategories();
  const listData = await getItens();

  const categoriesMapped: CategoryType[] = categoryData.data.map(
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

  const itensMapped: ItemChecklistType[] = listData.data.map((item: any) => ({
    ...item,
    category: categoriesMapped.find((el) => el.id === item.category)
  }));

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
