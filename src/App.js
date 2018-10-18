import React, { Component } from 'react';
import './App.css';
import firebaseConf from './firebaseConf/FirebaseConf';
import Login from '../src/components/Login';
import Wall from '../src/components/Wall';



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
      } else{
        this.setState({ user: null });
      }
    })
  }

  render() {
    return (
      <div className="App">
      {this.state.user ? (<Wall user={this.state.user} />) : (<Login />)}
      </div>
    )}
}

export default App;