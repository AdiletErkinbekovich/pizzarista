import { useEffect, useState } from 'react';
import axios from 'axios';
import { useSelector, useDispatch } from 'react-redux';

import { Header, PizzaCard } from './components/';
import { Cart, Home } from './pages';
import { BrowserRouter, Route, Routes, json } from 'react-router-dom';
import { setPizzas } from './redux/actions/pizzas.js';
import pizzas from './redux/reducers/pizzas.js';
import { fetchPizzas } from './redux/actions/pizzas.js';

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchPizzas());
  }, []);

  return (
    <>
      <div className="wrapper">
        <Header />
        <div className="content">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="1" element={<Home />} />
            <Route path="2" element={<Cart />} />
          </Routes>
        </div>
      </div>
    </>
  );
}

export default App;
