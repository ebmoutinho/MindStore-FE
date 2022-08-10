import './App.css';
import Register from './pages/Register';
import Login from './pages/Login';
import Footer from './components/Footer';
import Header from './components/Header';

function App() {
  return (
    <div>
      <Header />
      <Register />
      <Login />
      <Footer />
    </div>
  );
}

export default App;