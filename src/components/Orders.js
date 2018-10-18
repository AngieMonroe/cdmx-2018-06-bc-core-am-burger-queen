import React from 'react';
import { Table, TableBody, Button, Fa  } from 'mdbreact';

const Orders = (props) => {
  return (
      <section className="container">
        <div className="row mt-5 ">
        <div className="col-7">
        <Table>
        <TableBody>
            <tr>
            <td className="text-center align-middle h4-responsive">Producto</td>
            <td className="text-center align-middle h4-responsive">Precio</td>
            <td className="text-center align-middle"><Button color="red darken-4 rounded"><Fa icon="trash" size="1x md" className="m-1"/><br/></Button></td>
            </tr>
            <tr>
            <td className="text-center align-middle h4-responsive">Producto</td>
            <td className="text-center align-middle h4-responsive">Precio</td>
            <td className="text-center align-middle"><Button color="red darken-4 rounded"><Fa icon="trash" size="1x md" className="m-1"/><br/></Button></td>
            </tr>
        </TableBody>
        </Table>
        </div>
         <div className="col col-5 text-center ">
             <p className="display-4">Total<br/>$10.00</p>
             <Button ><Fa icon="paper-plane" size="1x md" className="m-1"/><br/>Enviar a Cocina</Button>
         </div>
        </div>

    </section>
  );
}

export default Orders;