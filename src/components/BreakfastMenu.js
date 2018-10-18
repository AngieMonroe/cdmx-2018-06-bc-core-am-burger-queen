import React,  { Component }  from 'react';
import { Button, Fa } from 'mdbreact';



class BreakfastMenu extends Component {
    render(){
        return (
            <section className="ml-4 mt-5">
                <Button color="green" ><Fa icon="coffee" size="5x lg" className="m-2"/><br/>Café americano</Button>
                <Button color="green" darken><Fa icon="coffee" size="5x lg" className="m-2"/><strong className="h2">M</strong><br/>Café con Leche</Button>
                <Button color="green" darken ><Fa icon="cutlery" size="5x lg" className="m-2"/><br/>Sandwich J y Q</Button>
                <Button color="green" darken><Fa icon="leaf" size="5x lg" className="m-2"/><br/>Jugo Natural</Button>
            </section>
        )
    }
}

export default BreakfastMenu;