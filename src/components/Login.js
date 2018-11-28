import React, { Component } from 'react';
import Logo from '../images/Logo.png'
import { Container, Row, Col, Input, Button, ModalFooter } from 'mdbreact';
import { withRouter } from 'react-router-dom';
import firebase from 'firebase';

//Componente Login. El usuario inicia sesión la autenticación se realiza mediante firebase

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
    e.preventDefault();
    const { email, password } = this.state;
    firebase.auth().signInWithEmailAndPassword(email, password)
    .then(result => this.props.history.push('/orders'))
    .catch(function(error) {
      console.log(error);
      if(error.code === "auth/invalid-email"){
        alert('Email no válido, revisa la información.')
      } else if(error.code === "auth/wrong-password"){
        alert('Password no válido, revisa la información.')
      }
    });
  }

  handleChange(e){
    // console.log(this.state)
    this.setState ({
      [e.target.name]: e.target.value
    })
  }

  // Con este metodo enviamos a la pagina para recuperar contraseña por medio de rutas
  resetPassword(){
    this.props.history.push('/recover')
  }

  render() {
    return(
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
                <Button color="warning" className="mb-5 rounded" size="lg" onClick={this.signIn.bind(this)} >Entrar</Button>
              </div>
            </form>
            <ModalFooter className="mx-5 pt-3 mt-4">
              <Button color="lime" size="lg" className="mt-5 rounded" onClick={this.resetPassword.bind(this)}>Restaurar Contraseña </Button>
            </ModalFooter>
          </Col>
        </Row>
      </Container>
    );
  }
};

export default withRouter(Login);