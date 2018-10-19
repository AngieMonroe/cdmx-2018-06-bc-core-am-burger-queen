import React,  { Component }  from 'react';
import NavbarApp from './NavbarApp';
import { Button } from 'mdbreact';
import Orders from './Orders'
import { withRouter } from 'react-router-dom';



class Wall extends Component {
   
    breakfast(){
        this.props.history.push('/breaksfast')
    }
    render(){
        return (
            <div>
            <NavbarApp />
            <section className="container mt-4">
            <Button className="mr-4 rounded" size="lg" color="lime darken-4" onClick={this.breakfast.bind(this)}>Desayunos</Button>
            <Button className="rounded" size="lg" color="orange darken-4">Comida y Cenas</Button>
            <section id="breakfast">
            </section>
            </section>
            <Orders />
            </div>
        )
    }
}

export default withRouter(Wall);