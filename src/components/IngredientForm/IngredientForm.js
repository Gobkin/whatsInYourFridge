import React, { Component } from 'react';
import AutocompleteText from '../AutocompleteText/AutocompleteText';
import './IngredientsForm.css';
import PickedItem from '../PickedItem/PickedItem';
import SearchRecipe from '../SearchRecipeIds/SearchRecipeIds';

class IngredientForm extends Component{
    constructor(){
        super();
        this.state = {
            pickedIngedients:[],
            numberOfItems:'',
            disabled:false,

        }
    }

    addToList = (ingredient) => {
        const ingredientsArray = this.state.pickedIngedients;
        ingredientsArray.push(ingredient);
        this.setState({
            pickedIngedients:ingredientsArray,
            numberOfItems:ingredientsArray.length,
        });
        if (this.state.numberOfItems === 2){
            this.setState( {disabled: !this.state.disabled} )
        }
    }

    deleteItem = (listItem) => {
        const numberOfItems = this.state.pickedIngedients.length - 1;
        const modifiedArray = this.state.pickedIngedients.filter( item => {return item !== listItem});
        this.setState({
            pickedIngedients:modifiedArray,
            numberOfItems: numberOfItems,
            disabled: false,
        })
    }

    render(){
        return(
            <div className="IngredientForm">
                <form>
                    <AutocompleteText
                        addIngredient={this.addToList}
                        disabled={this.state.disabled}
                    />
                </form>
                <ul>
                    {this.state.pickedIngedients.map((ingredient) => {
                        return(
                            <PickedItem
                                ingredient={ingredient}
                                key={ingredient}
                                deleteItem={this.deleteItem}
                            />
                        );
                    })}
                </ul>
                <SearchRecipe 
                    ingredients={this.state.pickedIngedients}
                    getIds={this.props.getIds}
                />
            </div>
        )
    }
}

export default IngredientForm;