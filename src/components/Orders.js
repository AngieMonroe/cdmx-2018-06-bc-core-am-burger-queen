import React, { Component } from 'react';
import { Table, TableBody, Button, Fa  } from 'mdbreact';
import store from '../store';
import { withRouter } from 'react-router-dom';
import { firestore } from '../firebaseConf/FirebaseConf';
import './Orders.css';



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

    removeFromOrder(product, i){
        store.dispatch({
            type: "REMOVE_FROM_ORDER",
            product,
            i})
    }

    sendKitchen(){
        const {name} = this.props
        if(!name){
            alert('Ingresar nombre cliente')
        } 
        if (this.state.order.length === 0) {
            alert('Ingresa producto')
        }
        else {
        firestore.collection("orders").add({
            order: this.state.order,
            status: "En cocina",
            name
        })
        .then(function() {
            // console.log("Document successfully written!");
        })
        this.props.history.push('/')
    }
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
            <Button size="sm" color="red darken-4 rounded" onClick={() =>this.removeFromOrder(product, i)}><Fa icon="trash" size="1x"/><br/></Button></td>
            </tr>
        })

        this.state.order.forEach(product => {
            // console.log(product.precio)
            total += product.precio
        })

        
    return (
      <section className="container">
        <div className="row mt-5 ">
        <div className="col-7 margin-bottom">
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