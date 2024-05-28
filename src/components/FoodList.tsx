import { FC } from 'react';
import FoodItemCard from './FoodItemsCard';
import { useFood } from '../contexts/FoodProvider';

const FoodList: FC = () => {
  const { foodItems } = useFood();

  return (
    <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-14 justify-center items-center'>
      {foodItems.map((item) => (
        <FoodItemCard key={item.id} item={item} />
      ))}
    </div>
  );
};

export default FoodList;