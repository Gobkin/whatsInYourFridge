import React, { Component } from 'react';
import './App.scss';
import './App.css';
import Button from '@material-ui/core/Button';
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
      <div className="App flex flex-column wrapper">
        <header className="header border flex center">
          <div className="input">
            <h1 className="flex center align-center">What's In Your Fridge???</h1>
            <IngredientForm
              pickedIngredients={pickedItems}
              getIds={this.getIds}
              searchRecipe={this.searchRecipe}
            />
          </div>
        </header>
        
        <section className="content flex basis-25 border">
          <div className="recipe-area basis-60 border">
            {pickedItems.length?
            <Recipes 
              pickedIngredients={pickedItems}
              getShoppingItems={this.getShoppingItems}
              shoppingItems={shoppingItems}
            />:
            <h2>Pick Some Ingredients To See Suggestions.</h2>}
          </div>

          <div className="ShoppingList border basis-35">
            <h2>Shopping List:  </h2>
            <ShoppingList 
              shoppingItems={shoppingItems} 
              removeItem={this.removeShoppingItem}
            />
            <button onClick={this.clearShoppingList}>Clear List.</button>
          </div>
        </section>
      </div>
    );
  }
}

export default App;
