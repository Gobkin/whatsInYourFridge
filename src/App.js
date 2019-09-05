import React, { Component } from 'react';
import axios from 'axios';
import './App.scss';
import './App.css';
import IngredientForm from './components/IngredientsForm/IngredientForm';

class App extends Component {
  render(){
    return (
      <div className="App">
        <div className="input">
          <IngredientForm/>
        </div>
      </div>
    );
  }
}

export default App;
