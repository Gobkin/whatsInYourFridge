import React, { Component } from 'react';
import AutocompleteText from '../AutocompleteText/AutocompleteText';
import './IngredientsForm.css';
import PickedItem from '../PickedItem/PickedItem';


class IngredientForm extends Component{
    constructor(props){
        super(props);
        this.state = {
            numberOfItems:'',
            disabled:false,

        }
    }
    
    addToList = (ingredient) => {
        // this one here to prevent mutability because... react
        const pickedIngredientsClone = [...this.props.pickedIngredients];
        pickedIngredientsClone.push(ingredient);
        this.setState({
            numberOfItems:pickedIngredientsClone.length,
            disabled:(this.state.numberOfItems === 2?true:false),
        }, ()=>{
            this.props.getIds(pickedIngredientsClone);
        });
    }

    deleteItem = (ingredient) => {
        const {pickedIngredients} = this.props;
        const numberOfItems = pickedIngredients.length - 1;
        const modifiedArray = pickedIngredients.filter( item => {return item !== ingredient});
        this.setState({
            numberOfItems: numberOfItems,
            disabled: false,
        },() => {
            this.props.getIds(modifiedArray);
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
                    {this.props.pickedIngredients.map((ingredient) => {
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