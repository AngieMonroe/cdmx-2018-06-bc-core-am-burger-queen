import React, { Component } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import App from '../App';
import PasswordReset from './PasswordReset';
import BreakfastMenu from './BreakfastMenu';
import Wall from './Wall';

export default class RouterApp extends Component {
    render(){
        return(
            <BrowserRouter basename = { process.env.PUBLIC_URL }>
            <Switch>
                <Route path='/' exact component = {App} />
                <Route path='/PasswordReset' exact component = {PasswordReset} />
                <Route path='/BreakfastMenu' exact component = {BreakfastMenu} />
                <Route path='/Wall' exact component = {Wall} />
            </Switch>
            </BrowserRouter>
        )
    }

}