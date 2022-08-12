import './App.css';
import Home from './pages/Home/Home';
import Register from './pages/Credentials/Register';
import Login from './pages/Credentials/Login';
import ProductListPage from './pages/ProductListPage/ProductListPage';
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="login" element={<Login />} />
          <Route path="register" element={<Register />} />
          <Route path="productlistpage" element={<ProductListPage />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;