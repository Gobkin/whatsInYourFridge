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
      pickedItems: [],
      recipeResults: [],

    }
  }

  getIds = (array) => {
    this.setState({
      pickedItems:array,
    });
  }

  getRecipes = (array) =>{
    debugger
    this.setState({
      recipeIds: array,
    })
  }

  render(){
    const {pickedItems, recipeIds} = this.state;
    return (
      <div className="App flex flex-column">
        <div className="input basis-100">
          
          <IngredientForm
            pickedIngredients={pickedItems}
            getIds={this.getIds}
            searchRecipe={this.searchRecipe}
          />
        </div>
        
        <div className="flex basis-100">
          <div className="basis-100">
            {
              pickedItems.length?
            <Recipes 
              pickedIngredients={pickedItems}
              // getRecipes={this.getRecipes}
              recipeIds={recipeIds}
            />:
            <h1>Make some picks</h1>}
          </div>
        </div>
      </div>
    );
  }
}

export default App;
