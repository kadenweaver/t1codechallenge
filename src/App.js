import React, { Component } from 'react';


import './App.css';

//cited: https://stackoverflow.com/questions/46737933/changing-text-on-button-push-react-js
//https://stackoverflow.com/questions/42364838/incrementing-state-value-by-one-using-react

const API = 'https://jsonplaceholder.typicode.com';
const DEFAULT_QUERY = '/users';


class App extends Component {
    state = {
        text: 'Hello World',
        count: 0,
      
    }

    onClick = () => {
        
        var places = ['Earth', 'Solar System', 'Galaxy', 'Universe', 'T1CG', 'Nick','World'];
        this.setState({
            text: 'Hello ' + places[this.state.count],
            count: (this.state.count + 1)%places.length
        
        });
        
    }
    
    makeFetch() {
    return fetch(API+DEFAULT_QUERY)
      .then((response) => response.json())
      .then((responseJson) => {
        alert(responseJson[0]);
      })
      .catch((error) => {
        console.error(error);
      });
    }
    

  render() {
    return (
      <div className="App">
        <h1>{this.state.text}</h1>
        <button onClick={this.onClick}>Change Text</button>
        <div></div>
        <button onClick={this.makeFetch}>Import Data</button>
      </div>
    );
  }
}

export default App;
