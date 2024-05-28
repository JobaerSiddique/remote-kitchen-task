
import './App.css'
import AddFoodItem from './components/AddFoodsItem'
import FoodList from './components/FoodList'
import { FoodProvider } from './contexts/FoodProvider'

function App() {
  

  return (
    <>
  <FoodProvider>
      <div className="container mx-auto p-4">
        <h1 className="animate-text bg-gradient-to-r from-teal-500 via-purple-500 to-orange-500 bg-clip-text text-transparent text-5xl font-black">Remote Kitchen</h1>
        <AddFoodItem />
        <FoodList />
      </div>
    </FoodProvider>
      
    </>
  )
}

export default App
