import React, { Component } from 'react';
import axios from 'axios';
import SearchRecipeData from '../SearchRecipeData/SearchRecipeData';
import SearchRecipe from '../SearchRecipeIds/SearchRecipeIds';

class Recipes extends Component{
    constructor(props){
        super(props);
        this.state = {
            // currentProps : {},//IDK MB JUST HAVE TO BE A FUNCTION CONSIDER REFACTOR LATER!!!!!!!!!!!!!
            // foundRecipeIds:[],
        }
    }

    searchRecipeIds = (array) =>{
        console.log('searching for recipes')
        const foundRecipesIds = [];
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
                    foundRecipesIds.push(recipe.idMeal);
                });
            }
        });

        return foundRecipesIds;
    }

    render(){
        const data = this.searchRecipeIds(this.props.pickedIngredients);
        return(
            <div>
                {
                    this.props.pickedIngredients.length?
                    // <h2>coming soon</h2>
                    <SearchRecipeData 
                        data={data}
                    />
                    :
                    <h3>One moment!</h3>
                }
            </div>
        )
    }
}
export default Recipes;