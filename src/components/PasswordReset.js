import React, { Component } from 'react';
import Logo from '../images/Logo.png'
import { Container, Row, Col, Input, Button } from 'mdbreact';
import firebaseConf from '../firebaseConf/FirebaseConf'

class PasswordReset extends Component {
  constructor(props){
    super(props);
    this.state = {
      email: ''
    }
  }
    
    handleChange = (e) => {
        this.setState ({
          [e.target.name]: e.target.value
        })
      }

    resetPassword(){
      console.log(this.state)
        firebaseConf.sendPasswordResetEmail(this.state.email).then(function() {
            // Email sent.
          }).catch(function(error) {
            // An error happened.
          });
    }


    render(){
        return (
            <Container>
        <Row className= "row justify-content-md-center">
          <Col md="10">
          <img src={Logo} className="m-5 mx-auto d-block" alt="logo" />
            <form>
              <p className="h5 text-center mb-4">Restaura tu contraseña</p>
              <div className="grey-text">
                <Input label="Escribe tu email" icon="envelope" group type="email" name="email" validate error="wrong" success="right" onChange={this.handleChange}/>
              </div>
              <div className="text-center mb-3">
                <Button color="warning" className="mb-3" size="lg" onClick={this.resetPassword} >Enviar correo</Button>
              </div>
            </form>
          </Col>
        </Row>
      </Container>
        )
    }
}

export default PasswordReset;