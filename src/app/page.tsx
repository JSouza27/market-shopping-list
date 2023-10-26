import Header from '../components/Header';
import { getCategories } from './service/categories';
import { CategoryType } from '../common/types/category';
import { getItens } from './service/itens';
import { ItemChecklistType, ItemResponse } from '../common/types/item';
import Home, { HomeProps } from '../templates/Home';
import selectIcon from '../utils/SelectIcon';

export default async function Index() {
  const categories = await getCategories();
  const itens: ItemResponse[] = await getItens();

  const categoriesMapped: CategoryType[] = categories.map((category) => {
    return {
      ...category,
      icon: selectIcon(category.label)
    };
  });

  const unitOfMeasurement: CategoryType[] = [
    { id: '1', name: 'UN', label: 'unidade' },
    { id: '2', name: 'L', label: 'litro' },
    { id: '3', name: 'KG', label: 'Kg' }
  ];

  const itensMapped: ItemChecklistType[] = itens.map((item) => ({
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
