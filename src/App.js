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
      pickedItems: [],

    }
  }

  getIds = (array) => {
    this.setState({
      pickedItems:array,
    });
  }

  render(){
    const {pickedItems} = this.state;
    return (
      <div className="App flex flex-column">
        <div className="input basis-100 border">
          
          <IngredientForm
            pickedIngredients={pickedItems}
            getIds={this.getIds}
            searchRecipe={this.searchRecipe}
          />
        </div>
        
        <div className="flex basis-100 border">
          <div className="basis-75">
            {
              pickedItems.length?
            <Recipes 
              pickedIngredients={pickedItems}
            />:
            <h2>Pick Some Ingredients First!</h2>}
          </div>

          <div className="ShoppingList border basis-25">
                
          </div>


        </div>

      </div>


    );
  }
}

export default App;
