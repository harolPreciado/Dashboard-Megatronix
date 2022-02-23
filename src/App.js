import './assets/css/App.css'
import { Route, Routes } from 'react-router-dom'

import Header from './components/Header'
import SideLeft from './components/products/SideLeft';
import Home from './components/Home'
import Products from './components/products/Products'
import Error404 from './components/Error404'

function App() {
  return (
    <div>
      <Header />
      <div className="container">
        <SideLeft />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/products" element={<Products />} />
          <Route path="/users" element={<Products />} />
          <Route path="/categories" element={<Products />} />
          <Route path="*" element={<Error404 />} />
        </Routes>
      </div>
    </div>
  );
}
export default App;
