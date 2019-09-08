import React, { Component } from 'react';
import axios from 'axios';
import RecipeCard from '../RecipeCard/RecipeCard';
import RenderCards from '../RenderCards/RenderCards';
import SearchRecipe from '../SearchRecipeIds/SearchRecipeIds';

class SearchRecipeData extends Component{
    constructor(props){
        super(props);
        this.state = {
            recipeIds: [],
            recipeResults : [],
        }
    }

    
    findRecipes(array){
        const RECIPE_API_URL = 'https://www.themealdb.com/api/json/v2/8673533/lookup.php?'
        const recipeIds = array;
        const recipePromises = [];
        const recipeResults = [];
        recipeIds.forEach(id => {
            console.log('making promise');
            const requestParams = {params: { i: id }};
            const recipePromise = axios.get(RECIPE_API_URL, requestParams);
            recipePromises.push(recipePromise);
        });
        Promise.all(recipePromises)
        .then(args => {
            console.log(args);
            args.forEach(item => {
                console.log(item);
                recipeResults.push(item.data.meals[0]);
            });
            this.setState({recipeResults});
        });
    }
    
    componentDidMount(){
        
    }

    render(){
        this.findRecipes(this.props.data);
        return(
            <div>
                {this.props.data.length?<RenderCards data={'bla'}/>:'Wait a sec plz!'} 
            </div>
        )
    }
    
}
export default SearchRecipeData;