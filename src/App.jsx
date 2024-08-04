import { useEffect, useState } from 'react';
import axios from 'axios';
import { useSelector, useDispatch } from 'react-redux';

import { Header, PizzaCard } from './components/';
import { Cart, Home } from './pages';
import { BrowserRouter, Route, Routes, json } from 'react-router-dom';
import { setPizzas } from './redux/actions/pizzas.js';
import pizzas from './redux/reducers/pizzas.js';

function App() {
  const dispatch = useDispatch();
  const items = useSelector(({ pizzas, filters }) => ({
    items: pizzas.items,
    sortBy: filters.sortBy,
  }));

  useEffect(() => {
    axios.get('http://localhost:5173/db.json').then(({ data }) => {
      dispatch(setPizzas(data.pizzas));
    });
  }, []);

  return (
    <>
      <div className="wrapper">
        <Header />
        <div className="content">
          <Routes>
            <Route path="/" element={<Home items={items} />} />
            <Route path="1" element={<Home items={items} />} />
            <Route path="2" element={<Cart />} />
          </Routes>
        </div>
      </div>
    </>
  );
}

export default App;
