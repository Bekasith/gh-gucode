import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {

   state = { 
    imageUrl : ""}

  componentDidMount(){
    fetch('https://api.giphy.com/v1/gifs/random?api_key=4EHX2N0CExUeUHCRQICpyCqSP2U0EyB8&tag=liverpool UCL &rating=G')
    .then( res => res.json())
    .then( json => json.data.image_url )
    .then( imageUrl => {
        //เมือได้ให้ set state 
        //console.log(imageUrl);
        this.setState({imageUrl:imageUrl})
    })

  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 >
          <a className="rainbow" >aaaaaaaaaa</a>
          </h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
        <img src={this.state.imageUrl}/>
      </div>
    );
  }
}

export default App;
