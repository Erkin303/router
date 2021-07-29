import './App.css';
import React from 'react';
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Home } from './pages/Home/Home';
import { About } from './pages/About/About';
import { Dashboard } from './pages/Dashboard/Dashboard';
import { Service } from './pages/Service/Service';
import { Product } from './pages/Product/Product';
import { Constructor } from './pages/Constructor/Constructor';
import { News } from './pages/News/News';
import { Contacts } from './pages/Contacts/Contacts';

import { Header } from './containers/Header/Header';


const pages = [
  { path: "/", component: <Home />, exact: true },
  { path: "/about", component: <About /> },
  { path: "/dashboard", component: <Dashboard /> },
  { path: "/service", component: <Service /> },
  { path: "/product", component: <Product /> },
  { path: "/constructor", component: <Constructor /> },
  { path: "/news", component: <News /> },
  { path: "/contacts", component: <Contacts /> },

]



function App() {
  return (
    <div className="App">
      <Header></Header>


      <Switch>
        {pages.map((page, index) => {
          return <Route path={page.path} exact={page.exact} key={page.path}>
            {page.component}

          </Route>
        })}
      </Switch>


    </div>
  );
}

export default App;