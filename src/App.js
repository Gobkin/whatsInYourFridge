import React, { Component } from 'react';
import axios from 'axios';
import './App.scss';
import './App.css';
import IngredientForm from './components/IngredientForm/IngredientForm';
import Recipes from './components/Recipes/Recipes';

class App extends Component {
  constructor(){
    super();
    this.state = {
      recipeIds : [],

    }
  }

  getIds = (idArray) => {
    this.setState({
        recipeIds:idArray,
    })
  }

  render(){
    return (
      <div className="App flex flex-column">
        <div className="input basis-100">
          <IngredientForm
            getIds={this.getIds}
          />
        </div>
        
        <div className="flex basis-100">
          <div className="basis-75">
            {this.state.recipeIds.length?<Recipes recipeIds={this.state.recipeIds}/>:<h1>Make some picks</h1>}
          </div>

        </div>
          
      </div>
    );
  }
}

export default App;
