import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import ItemDetail from './pages/ItemDetail';
import Basket from './pages/Basket';
import Notfound from './pages/Notfound';
import Navbar from './components/Navbar';

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Switch>
        <Route path="/item/detail/:id" exact component={ItemDetail} />
        <Route path="/basket" exact component={Basket} />
        <Route path="/" exact component={HomePage} />
        <Route component={Notfound} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
