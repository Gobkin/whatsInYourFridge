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

    }
  }

  getIds = (array) => {
    console.log('setting state');
    this.setState({
        pickedItems:array,
    });
  }

  searchRecipe = (item) =>{
    const itemList = this.state.pickedItems;
    const foundRecipesIds = [];
    const RECIPE_API_URL = 'https://www.themealdb.com/api/json/v2/8673533/filter.php?';
    let queryString = ''

    itemList.push(item);
    itemList.forEach(item => {
        queryString = queryString + item +',';
    });
    const queryUrl = `${RECIPE_API_URL}i=${queryString}`
    
    // this one here removes the trailing coma at the end of the query string;
    axios.get(queryUrl.substring(0, queryUrl.length - 1))
    .then(res =>{
        if (res.data.meals) {
          res.data.meals.forEach(recipe => {
              foundRecipesIds.push(recipe.idMeal);
          });
          this.setState({
            recipeIds:foundRecipesIds,
          })
        }else{
          return "Nothing found"
        }
    });
  }

  render(){
    console.log('rendering app')
    return (
      <div className="App flex flex-column">
        <div className="input basis-100">
          <IngredientForm
            getIds={this.getIds}
            searchRecipe={this.searchRecipe}
          />
        </div>
        
        <div className="flex basis-100">
          <div className="basis-100">
            {this.state.recipeIds.length?
            <Recipes recipeIds={this.state.recipeIds}/>:
            <h1>Make some picks</h1>}
          </div>

        </div>
          
      </div>
    );
  }
}

export default App;
