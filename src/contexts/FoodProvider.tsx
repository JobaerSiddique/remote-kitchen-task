import { createContext, useState, ReactNode, useContext, useEffect } from 'react';
import foodData from '../../public/FoodItems.json';

type FoodItem = {
  id: number;
  name: string;
  description: string;
  price: string;
};

type FoodContextType = {
  foodItems: FoodItem[];
  addItem: (item: FoodItem) => void;
  editItem: (item: FoodItem) => void;
  deleteItem: (id: number) => void;
};

const FoodContext = createContext<FoodContextType | undefined>(undefined);

export const FoodProvider = ({ children }: { children: ReactNode }) => {
  const [foodItems, setFoodItems] = useState<FoodItem[]>([]);

  useEffect(() => {
    setFoodItems(foodData);
  }, []);

  const addItem = (item: FoodItem) => {
    setFoodItems((prevItems) => [...prevItems, item]);
  };

  const editItem = (updatedItem: FoodItem) => {
    setFoodItems((prevItems) =>
      prevItems.map((item) => (item.id === updatedItem.id ? updatedItem : item))
    );
  };

  const deleteItem = (id: number) => {
    setFoodItems((prevItems) => prevItems.filter((item) => item.id !== id));
  };

  return (
    <FoodContext.Provider value={{ foodItems, addItem, editItem, deleteItem }}>
      {children}
    </FoodContext.Provider>
  );
};

export const useFood = () => {
  const context = useContext(FoodContext);
  if (!context) {
    throw new Error('useFood must be used within a FoodProvider');
  }
  return context;
};