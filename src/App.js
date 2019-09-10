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

  // gets recipe Ids
  getIds = (array) => {
    this.setState({
      pickedItems:array,
    });
  }

  // gets shopping list items
  getShoppingItems = (item) => {
    const shoppingItemsClone = [...this.state.shoppingItems];
    shoppingItemsClone.push(item);
    this.setState({
      shoppingItems:shoppingItemsClone,
    })
  }

  // removes item from shopping list
  removeShoppingItem = (item) => {
    const shoppingItemsClone = [...this.state.shoppingItems];
    const filteredList = shoppingItemsClone.filter( element => {return element !== item});
    this.setState({
      shoppingItems:filteredList,
    })
  }

  // clears shopping list completely
  clearShoppingList = () => {
    this.setState({
      shoppingItems:[],
    })
  }



  render(){
    const {pickedItems, shoppingItems} = this.state;
    return (
      <div className="App flex flexColumn wrapper">
        <header className="header border flex center">
          <div className="input">
            <h1 className="flex center alignCenter">What's In Your Fridge?</h1>
            <IngredientForm
              pickedIngredients={pickedItems}
              getIds={this.getIds}
              searchRecipe={this.searchRecipe}
            />
          </div>
        </header>
        
        <section className="content flex basis-25 border">
          <div className="recipeArea basis-60 border">
            {pickedItems.length?
            <Recipes 
              pickedIngredients={pickedItems}
              getShoppingItems={this.getShoppingItems}
              shoppingItems={shoppingItems}
            />:
            <h2>Pick Some Ingredients To See Suggestions.</h2>}
          </div>

          <div className="right flex basis-40">
            <div className="ShoppingList border basis-100">
              <h2>Shopping List:  </h2>
              <ShoppingList 
                shoppingItems={shoppingItems} 
                removeItem={this.removeShoppingItem}
              />
              {shoppingItems.length?
              <button className="clear delete" onClick={this.clearShoppingList} aria-label="clear shopping list">Clear</button>:
              true}
            </div>
          </div>
        </section>
      </div>
    );
  }
}

export default App;
