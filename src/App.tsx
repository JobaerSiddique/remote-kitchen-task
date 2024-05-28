
import './App.css'
import AddFoodItem from './components/AddFoodsItem'
import FoodList from './components/FoodList'
import { FoodProvider } from './contexts/FoodProvider'

function App() {
  

  return (
    <>
  <FoodProvider>
      <div className="container mx-auto p-4 parallax bg-cover bg-center " style={{ backgroundImage: 'url(https://images.unsplash.com/photo-1552566626-52f8b828add9?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8cmVzdGF1cmFudHxlbnwwfHwwfHx8MA%3D%3D)',opacity:'0.8' }}>
        <h1 className="animate-text bg-gradient-to-r from-teal-500 via-purple-500 to-orange-500 bg-clip-text text-transparent text-5xl font-black">Remote Kitchen</h1>
        <AddFoodItem />
        <FoodList />
      </div>
    </FoodProvider>
      
    </>
  )
}

export default App
