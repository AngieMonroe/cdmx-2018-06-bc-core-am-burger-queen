import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import PasswordReset from './components/PasswordReset';
import Login from './components/Login';
import Wall from './components/Wall';
import OrderList from './components/OrderList';
import { BrowserRouter, Route } from 'react-router-dom';
import 'font-awesome/css/font-awesome.min.css';
import 'bootstrap-css-only/css/bootstrap.min.css'; 
import 'mdbreact/dist/css/mdb.css';


import * as serviceWorker from './serviceWorker';

ReactDOM.render(
    <BrowserRouter basename = { process.env.PUBLIC_URL } >
      <div>
              <Route exact path = '/' component = { App } />
              <Route path = '/login' component = { Login } />
              <Route path = '/recover' component = { PasswordReset } />
              <Route path = '/orders' component = { Wall } />
              <Route path = '/report' component = {OrderList} />
        </div>
      </BrowserRouter>, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.register();