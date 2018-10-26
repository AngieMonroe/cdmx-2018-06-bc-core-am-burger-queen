import React, { Component } from 'react';
import { Table, TableBody, Button, Fa  } from 'mdbreact';
import store from '../store';
import firebase from 'firebase';
import { withRouter } from 'react-router-dom';

const firestore = firebase.firestore();


// Este componente es el encargado de mostrar el listado de los productos que se han solicitado y
// se realiza la suma, se pueden eliminar productos. Se utiliza redux para tener un estado global
// que se utiliza en conjunto con el componente Wall.
class Orders extends Component {
    constructor(props){
        super(props);
        this.state = {
            order: []
        }
        store.subscribe(() => {
            this.setState({
                order: store.getState().order
            })
            console.log(this.state.order)
        });
    }

    removeFromOrder(product){
        store.dispatch({
            type: "REMOVE_FROM_ORDER",
            product})
            
    }

    sendKitchen(){
        const {name} = this.props
        console.log(name)
        firestore.collection("orders").add({
            order: this.state.order,
            status: "En cocina",
            name
        })
        .then(function() {
            console.log("Document successfully written!");

        })
    }
   

    render() {
        let order;
        let total = 0
        order = this.state.order.map((product, i) => {
            console.log(product)
            return <tr key={i}>
            <td className="text-center align-middle">{product.nombre}</td>
            <td className="text-center align-middle">{product.precio}</td>
            <td className="text-center align-middle">
            <Button size="sm" color="red darken-4 rounded" onClick={() =>this.removeFromOrder(product)}><Fa icon="trash" size="1x"/><br/></Button></td>
            </tr>
        })

        this.state.order.forEach(product => {
            console.log(product.precio)
            total += product.precio
        })

        
    return (
      <section className="container">
        <div className="row mt-5 ">
        <div className="col-7">
        <Table>
        <TableBody>
        {order}
        </TableBody>
        </Table>
        </div>
         <div className="col-5 text-center ">
             <p className="display-4">Total<br/>${total}</p>
             <Button color="lime" onClick={this.sendKitchen.bind(this)}><Fa icon="paper-plane" size="1x md"/><br/>Enviar a Cocina</Button>
         </div>
        </div>
    </section>)
  }
}

export default withRouter(Orders);