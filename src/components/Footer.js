import React, { Component} from "react";
import { Col, Container, Row, Footer, Button, Fa } from "mdbreact";
import { withRouter } from 'react-router-dom';
import './Footer.css';

// Componente footer
class FooterApp extends Component {
    
    orderList(){
        this.props.history.push('/report')
      }
      
    render() {
    return (
    <Footer color="warning-color" className="font-small footer-bottom" >
    <Container fluid className="text-center text-md-right">
        <Row>
        <Col>
        <Button size="lg" color="red" onClick={this.orderList.bind(this)}> <Fa icon="list-alt" size="1x"/> <br/> Lista de Pedidos</Button>
        </Col>
        </Row>
    </Container>
    </Footer>
    );
}
}

export default withRouter(FooterApp);