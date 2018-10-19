import React, { Component } from 'react';
import './App.css';
import { withRouter } from 'react-router-dom';
import firebaseConf from './firebaseConf/FirebaseConf';


class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      user: {}
    }
  }

  componentDidMount(){
    this.authListener();
  }

  authListener() {
    firebaseConf.auth().onAuthStateChanged((user)=>{
      if(user){
        this.setState({ user });
        this.props.history.push('/orders')
      } else{
        this.setState({ user: null });
        this.props.history.replace('/login')
      }
    })
  }

  render() {
    return (
      <div className="App">
      
      </div>
    )}
}

export default withRouter(App);
