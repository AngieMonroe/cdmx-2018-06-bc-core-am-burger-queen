import React,  { Component }  from 'react';
import { Button, Fa } from 'mdbreact';



class BreakfastMenu extends Component {
    render(){
        return (
            <section className="container mt-4">
                <Button color="green" className="mr-3 mb-3"><Fa icon="coffee" size="4x md" className="m-2"/><br/>Café americano</Button>
                <Button color="green" className="mr-3 mb-3"><Fa icon="coffee" size="4x md" className="m-2"/><strong className="h2">M</strong><br/>Café con Leche</Button>
                <Button color="green" className="mr-3 mb-3" ><Fa icon="cutlery" size="4x md" className="m-2"/><br/>Sandwich J y Q</Button>
                <Button color="green" className="mr-3 mb-3" ><Fa icon="leaf" size="4x " className="m-2"/><br/>Jugo Natural</Button>
            </section>
        )
    }
}

export default BreakfastMenu;