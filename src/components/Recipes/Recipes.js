import React, { Component } from 'react';
import axios from 'axios';
import SearchRecipeData from '../SearchRecipeData/SearchRecipeData';

class Recipes extends Component{
    constructor(props){
        super(props);
        this.state = {
            // currentProps : {},//IDK MB JUST HAVE TO BE A FUNCTION CONSIDER REFACTOR LATER!!!!!!!!!!!!!
            foundRecipeIds:[],

        }
    }

    searchRecipeIds = (array) =>{
        const pickedIngredients = array;
        const foundRecipeIds = [];
        const RECIPE_API_URL = 'https://www.themealdb.com/api/json/v2/8673533/filter.php?';
        let queryString = ''
        array.forEach(item => {
            queryString = queryString + item +',';
        });
        // this one here removes the trailing coma at the end of the query string;
        const apiParams = { params:{i: queryString.substring(0, queryString.length - 1)} }
        
        axios.get(RECIPE_API_URL, apiParams)
        .then(res =>{
            if (res.data.meals) {
                res.data.meals.forEach(recipe => {
                    foundRecipeIds.push(recipe.idMeal);
                });
            }
            this.setState({
                foundRecipeIds,
                pickedIngredients,
            });
        });
    }

    
    componentDidUpdate(prevProps, prevState){
        const {pickedIngredients} = this.props;
        if (pickedIngredients !== prevProps.pickedIngredients){
            this.searchRecipeIds(pickedIngredients);
        }
    }
    
    componentDidMount(){
        const {pickedIngredients}= this.props;
        this.searchRecipeIds(pickedIngredients);
    }
    render(){
        const {foundRecipeIds} = this.state
        return(
            <div>
                {
                    foundRecipeIds.length?
                    <SearchRecipeData 
                        recipeIds={foundRecipeIds}
                        getShoppingItems={this.props.getShoppingItems}
                        shoppingItems={this.props.shoppingItems}
                    />
                    :
                    <h3>Sorry, nothing found. Get createive!</h3>
                }
            </div>
        )
    }
}
export default Recipes;