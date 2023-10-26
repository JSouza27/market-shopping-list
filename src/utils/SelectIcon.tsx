import { Apple, Beef, Carrot, Milk, Sandwich } from 'lucide-react';

export default function selectIcon(label: string) {
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
}
