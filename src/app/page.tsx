import { Apple, Beef, Carrot, Milk, Sandwich } from 'lucide-react';
import Main from '@/components/Main';
import Header from '../components/Header';
import { getCategories } from './service/categories';
import { CategoryType } from '../common/types/category';
import { getItens } from './service/itens';
import { ItemResponse } from '../common/types/item';

export default async function Home() {
  const categories = await getCategories();
  const itens = await getItens();

  const selectIcon = (label: string) => {
    switch (label) {
      case 'bukery':
        return <Sandwich className="text-yellow_dark" size={18} />;
      case 'vegetable':
        return <Carrot className="text-green_dark" size={18} />;
      case 'meat':
        return <Beef className="text-pink_dark" size={18} />;
      case 'fruit':
        return <Apple className="text-orange_dark" size={18} />;
      case 'drink':
        return <Milk className="text-blue_dark" size={18} />;
      default:
        return null;
    }
  };

  const categoriesMapped = categories.map((category) => {
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

  const itensMapped = (itens: ItemResponse[]) => {
    return itens.map((item) => ({
      ...item,
      category: categoriesMapped.find((el) => el.id === item.category)
    }));
  };

  return (
    <>
      <Header />
      <Main
        categories={categoriesMapped as CategoryType[]}
        units={unitOfMeasurement}
        listItens={itensMapped(itens)}
      />
    </>
  );
}
