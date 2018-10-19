import React, { Component } from 'react';
import Logo from '../images/Logo.png'
import { Container, Row, Col, Input, Button } from 'mdbreact';
import * as firebase from 'firebase'
import { withRouter } from 'react-router-dom';


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

    resetPassword(e){
      e.preventDefault();
      const { email } = this.state;
        firebase.auth().sendPasswordResetEmail(email).then(function() {
          alert('Te enviamos un correo')
          }).catch(function(error) {
          console.log(error)
          });
          this.props.history.push('/login');
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
                <Input label="Escribe tu email" icon="envelope" group type="email" name="email" validate error="wrong" success="right" onChange={this.handleChange.bind(this)}/>
              </div>
              <div className="text-center mb-3">
                <Button color="warning" className="mb-3" size="lg" onClick={this.resetPassword.bind(this)} >Enviar correo</Button>
              </div>
            </form>
          </Col>
        </Row>
      </Container>
        )
    }
}

export default withRouter(PasswordReset);