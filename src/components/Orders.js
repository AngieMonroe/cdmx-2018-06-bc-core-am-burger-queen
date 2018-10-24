import React, { Component } from 'react';
import { Table, TableBody, Button, Fa  } from 'mdbreact';


class Orders extends Component {

    render() {
        let order;
        let total = 0
        order = this.props.order.map((item, i) => {
            console.log(item)
            return <tr key={i}>
            <td className="text-center align-middle">{item.producto}</td>
            <td className="text-center align-middle">{item.precio}</td>
            <td className="text-center align-middle">
            <Button size="sm" color="red darken-4 rounded"><Fa icon="trash" size="1x"/><br/></Button></td>
            </tr>
        })

        this.props.order.forEach(obj => {
            console.log(obj.precio)
            total += obj.precio
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
             <Button color="lime" ><Fa icon="paper-plane" size="1x md" className=""/><br/>Enviar a Cocina</Button>
         </div>
        </div>
    </section>)
  }
}

export default Orders;