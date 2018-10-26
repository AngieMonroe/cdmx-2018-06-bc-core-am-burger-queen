import React, { Component } from 'react';
import firebase from 'firebase';
import { withRouter } from 'react-router-dom';
import NavbarApp from './NavbarApp';

const firestore = firebase.firestore();


class OrderList extends Component {
    constructor(props){
        super(props);
        this.state = ({
            orders: []
        })
    }
    

    componentDidMount(){
        const orders = []
        firestore.collection('orders').onSnapshot((querySnapshot) => {
            querySnapshot.forEach((doc) => {
                const {status, order, name} = doc.data();
                console.log(status, order)
                let dataOrder = {status, order, name}
                orders.push(dataOrder);
                // statusKitchen = status;
                // order.forEach((element) => {
                //     const dataOrder = element
                //     orders.push({dataOrder})
                // })
            })
        //     const pedido = {statusKiondragover
        //     let arraypedido = []
        //     arraypedido.push(pedido)
        console.log(orders)
        this.setState({orders})
        })

    }

    render () {
        
        let infoOrder = this.state.orders.map((element, i) => {
            console.log(element.status)
            let product = element.order.map((product) => {
                return  product.nombre
            })
            return (
            
                <tr key={i}>
                    <td>{element.name}</td>
                    <td>{product}</td>
                    <td>{element.status}</td>
                </tr>
            ) 
        
        })
        return (
            <section>
                <NavbarApp />
            <article className="container">
                <table className="table container">
                <thead className="grey lighten-2">
                    <tr>
                    <th scope="col">Nombre</th>
                    <th scope="col">Pedido</th>
                    <th scope="col">Status</th>
                    </tr>
                </thead>
                <tbody>
                    {infoOrder}
                </tbody>
                </table>
                </article>
                </section>
        )
 
}
}

export default withRouter(OrderList);