import { products } from './mocks/myproducts.json'
import { Products } from './components/Products'
import { Header } from './components/Header'
import { Cart } from './components/Cart.jsx'
import { CartProvider } from './context/cart.jsx'
import './App.css'

function App() {
  
  return (
    <CartProvider>
      <Header />
      <Cart/>
      <Products products={products}/>
    </CartProvider>
  )
}

export default App
