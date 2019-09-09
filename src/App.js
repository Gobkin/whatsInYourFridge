import React, { Component } from 'react';
import './App.scss';
import './App.css';
import IngredientForm from './components/IngredientForm/IngredientForm';
import Recipes from './components/Recipes/Recipes';
import ShoppingList from './components/ShoppingList/ShoppingList';

class App extends Component {
  constructor(){
    super();
    this.state = {
      pickedItems: [],
      shoppingItems: [],

    }
  }

  getIds = (array) => {
    this.setState({
      pickedItems:array,
    });
  }

  getShoppingItems = (item) => {
    const shoppingItemsClone = [...this.state.shoppingItems];
    shoppingItemsClone.push(item);
    this.setState({
      shoppingItems:shoppingItemsClone,
    })
  }

  removeShoppingItem = (item) => {
    const shoppingItemsClone = [...this.state.shoppingItems];
    const filteredList = shoppingItemsClone.filter( element => {return element !== item});
    this.setState({
      shoppingItems:filteredList,
    })
  }

  clearShoppingList = () => {
    this.setState({
      shoppingItems:[],
    })
  }

  render(){
    const {pickedItems, shoppingItems} = this.state;
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
          <div className="basis-75 border">
            {
              pickedItems.length?
            <Recipes 
              pickedIngredients={pickedItems}
              getShoppingItems={this.getShoppingItems}
              shoppingItems={shoppingItems}
            />:
            <h2>Pick Some Ingredients First!</h2>}
          </div>

          <div className="ShoppingList border basis-25">
            <h2>Shopping List:  </h2>
            <button onClick={this.clearShoppingList}>Clear List.</button>
            <ShoppingList 
              shoppingItems={shoppingItems} 
              removeItem={this.removeShoppingItem}
            />
          </div>
        </div>
      </div>
    );
  }
}

export default App;
