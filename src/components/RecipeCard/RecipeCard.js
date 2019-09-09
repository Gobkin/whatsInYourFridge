import React, { Component } from 'react';
import './RecipeCard.scss';
import './RecipeCard.css';
import AddToShoppingList from '../AddToShoppingList/AddToShoppingList';
import { thisExpression } from '@babel/types';
import ShoppingList from '../ShoppingList/ShoppingList';

class RecipeCard extends Component{
    constructor(props){
        super(props);
        this.state = {
        }
    }

    shoppingCheck(item, array){
        array.forEach((element)=>{
            console.log('checking for duplicates')
            if (element === item){
                console.log('item on the list')
                return true
            }
        })
    }

    render(){
        const {data, shoppingItems} = this.props
        const ingredientsArray = [];
        const measurementsArray = [];
        const ingredientPattern = new RegExp('^strIngredient', 'i');
        const measurePattern = new RegExp('^strMeasure', 'i');
        const combinedArray = [];
        
        for (let key in data){
            if (ingredientPattern.test(key) && data[key]){
                ingredientsArray.push(data[key]);
            }else if (measurePattern.test(key) && data[key]){
                measurementsArray.push(data[key]);
            }
        }
    
        ingredientsArray.forEach((item, index) => {
            const ingrObj = {};
            ingrObj.ingredient = item;
            ingrObj.measure = measurementsArray[index];
            combinedArray.push(ingrObj);
        });
        
        const renderIngredients = combinedArray.map(item => {
            return(
                <div>
                    <li key={item.ingredient}>{item.ingredient} - {item.measure} 
                    <AddToShoppingList 
                        item={item}
                        add={this.props.getShoppingItems}
                        shoppingItems={shoppingItems}
                    /></li>
                </div>
            )
        });
    
    
        return(
            <div className="RecipeCard">
                <h2>{data.strMeal}</h2>
                <div className="content flex">
                    <div className="image-container flex">
                        <img src={data.strMealThumb} alt=""></img>
                    </div>
                    <div>
                        <ul>
                            {renderIngredients}
                        </ul>
                    </div>
                </div>
            </div>
        )
    }

}

export default RecipeCard;