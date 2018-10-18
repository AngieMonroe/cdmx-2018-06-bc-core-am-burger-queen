import React,  { Component }  from 'react';
import NavbarApp from './NavbarApp';
import { Button } from 'mdbreact';
import BreakfastMenu from './BreakfastMenu';
import Orders from './Orders'


class Wall extends Component {
    render(){
        return (
            <div>
            <NavbarApp />
            <section className="mt-4 ml-4">
            <Button className="mr-4 rounded" size="lg" color="lime darken-4">Desayunos</Button>
            <Button className="rounded" size="lg" color="orange darken-4">Comida y Cenas</Button>
            </section>
            <BreakfastMenu />
            <Orders />
            </div>
        )
    }
}

export default Wall;