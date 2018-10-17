import React from 'react';
import Logo from '../images/Logo.png'
import { Container, Row, Col, Input, Button, ModalFooter } from 'mdbreact';

class Login extends React.Component  {
  render() {
    return(
      <Container>
        <Row className= "row justify-content-md-center">
          <Col md="10">
          <img src={Logo} className="m-5 mx-auto d-block" alt="logo" />
            <form>
              <p className="h5 text-center mb-4">Iniciar Sesión</p>
              <div className="grey-text">
                <Input label="Type your email" icon="envelope" group type="email" validate error="wrong" success="right"/>
                <Input label="Type your password" icon="lock" group type="password" validate/>
              </div>
              <div className="text-center mb-3">
                <Button color="warning" className="mb-3" size="lg" >Entrar</Button>
              </div>
            </form>
            <ModalFooter className="mx-5 pt-3 mb-1">
              <Button color="lime" size="lg" className="mt-5" >Restaurar Contraseña</Button>
            </ModalFooter>
          </Col>
        </Row>
      </Container>
    );
  }
};

export default Login;