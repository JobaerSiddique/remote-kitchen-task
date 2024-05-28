
import './App.css'
import AddFoodItem from './components/AddFoodsItem'
import FoodList from './components/FoodList'
import { FoodProvider } from './contexts/FoodProvider'

function App() {
  

  return (
    <>
  <FoodProvider>
      <div className="container mx-auto p-4">
        <h1 className="text-2xl font-bold mb-4">Remote Kitchen</h1>
        <AddFoodItem />
        <FoodList />
      </div>
    </FoodProvider>
      
    </>
  )
}

export default App
