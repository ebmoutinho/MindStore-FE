import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from './pages/Home/Home';
import Register from './pages/Credentials/Register';
import Login from './pages/Credentials/Login';
import ProductListPage from './pages/ProductListPage/ProductListPage';
import ProductDetail from './pages/ProductDetail/ProductDetail';
import Profile from './pages/Profile/Profile';
import CartPage from "./pages/Cart/Cart"


//https://fakestoreapi.com/products
function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="login" element={<Login />} />
          <Route path="register" element={<Register />} />
          <Route path="profile" element={<Profile />} />
          <Route path="profile/:userId" element={<Profile />} />
          <Route path="productlistpage" element={<ProductListPage />} />
          <Route path="productlistpage/:id" element={<ProductDetail />} />
          <Route path="cart" element={<CartPage />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;