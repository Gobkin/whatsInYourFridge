import React, { Component } from 'react';
import AutocompleteText from '../AutocompleteText/AutocompleteText';
import './IngredientsForm.css';
import PickedItem from '../PickedItem/PickedItem';


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
        console.log('adding shit to list');
        ingredientsArray.push(ingredient);
        this.setState({
            pickedIngedients:ingredientsArray,
            numberOfItems:ingredientsArray.length,
            disabled:this.state.numberOfItems === 2?true:false,
        });
    }

    deleteItem = (listItem) => {
        const numberOfItems = this.state.pickedIngedients.length - 1;
        const modifiedArray = this.state.pickedIngedients.filter( item => {return item !== listItem});
        this.setState({
            pickedIngedients:modifiedArray,
            numberOfItems: numberOfItems,
            disabled: false,
        },()=>{
            // this.props.getIds(this.state.pickedIngedients);
        });
    }
    
    render(){
        return(
            <div className="IngredientForm">
                <form>
                    <AutocompleteText
                        addIngredient={this.addToList}
                        disabled={this.state.disabled}
                        searchRecipe={this.props.searchRecipe}
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
            </div>
        )
    }
}

export default IngredientForm;