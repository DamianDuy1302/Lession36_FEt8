import logo from './logo.svg';
import './App.css';
import { Route, Routes, useRoutes } from 'react-router-dom';
import DefaultLayout from './layouts/DefaultLayout';
import Home from './pages/Home';
import Products from './pages/Products';
import Cart from './pages/Cart';
import { routes } from './routes';
import AllRoutes from './components/AllRoutes';

function App() {

  return (
    <>
      <AllRoutes/>
    </>
  );
}

export default App;
