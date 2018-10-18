import React, { Component } from 'react';
import Logo from '../images/Logo.png'
import { Container, Row, Col, Input, Button, ModalFooter } from 'mdbreact';
import { BrowserRouter } from 'react-router-dom';
import PasswordReset from './PasswordReset';
import firebase from 'firebase';

class Login extends Component  {
  constructor(props){
    super(props);
    this.signIn = this.signIn.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.state = {
      email: '',
      password: ''
    }
  }

  signIn(e) {
    const { email, password } = this.state;
    e.preventDefault();
    firebase.auth().signInWithEmailAndPassword(email, password).catch(function(error) {
      console.log(error);
    });
  }

  handleChange(e){
    // console.log(this.state)
    this.setState ({
      [e.target.name]: e.target.value
    })
  }

  render() {
    return(
      <BrowserRouter>
      <Container>
        <Row className= "row justify-content-md-center">
          <Col md="10">
          <img src={Logo} className="m-5 mx-auto d-block" alt="logo" />
            <form>
              <p className="h5 text-center mb-5">Abrir Caja</p>
              <div className="grey-text mb-4">
                <Input className="mb-5" label="Escribe tu email" icon="envelope" group type="email" validate error="wrong" success="right" name="email" onChange={this.handleChange}/>
                <Input className="mb-5" label="Escribe tu password" icon="lock" group type="password" validate name="password" onChange={this.handleChange}/>
              </div>
              <div className="text-center mb-3">
                <Button color="warning" className="mb-5 rounded" size="lg" onClick={this.signIn} >Entrar</Button>
              </div>
            </form>
            <ModalFooter className="mx-5 pt-3 mt-4">
              <Button color="lime" size="lg" className="mt-5 rounded">Restaurar Contraseña</Button>
            </ModalFooter>
          </Col>
        </Row>
      </Container>
    </BrowserRouter>
    );
  }
};

export default Login;