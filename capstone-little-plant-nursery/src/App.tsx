import './App.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { NavBar } from './components/NavBar'
import { Home } from './pages/Home'
import { Cart } from './pages/Cart'
import { Products } from './pages/Products'

function App() {
  return (
    <>
      <div className="min-h-screen" data-theme="light">
        <BrowserRouter>
            <NavBar />
          <div className="flex flex-row gap-2 justify-center">
            <div className="flex flex-col gap-2 w-full max-w-7xl p-8 justify-center">
                  <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/cart" element={<Cart />} />
                    <Route path="/products" element={<Products />} />
                  </Routes>
                </div>
            </div>
        </BrowserRouter>
          </div>
    </>
  )
}

export default App
