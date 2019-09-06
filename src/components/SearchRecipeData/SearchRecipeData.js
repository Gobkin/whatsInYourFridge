import React, { Component } from 'react';
import axios from 'axios';
import RecipeCard from '../RecipeCard/RecipeCard';
import RenderCards from '../RenderCards/RenderCards';

class SearchRecipeData extends Component{
    constructor(props){
        super(props);
        this.state = {
            recipeResults : [],

        }
    }

    componentDidMount(){
        const RECIPE_API_URL = 'https://www.themealdb.com/api/json/v2/8673533/lookup.php?'
        
        const recipeIds = this.props.recipeIds;
        const recipePromises = [];
        const recipeResults = [];
        recipeIds.forEach(id => {
            const requestParams ={params: { i: id }} ;
            const recipePromise = axios.get(RECIPE_API_URL, requestParams);
            recipePromises.push(recipePromise);
        });
        
        Promise.all(recipePromises)
        .then(args => {
            args.forEach(item => {
                recipeResults.push(item.data.meals[0]);
            });
            this.setState({recipeResults});
        });
    }
    
    render(){
        
        return(
            <div>
                {this.state.recipeResults.length?<RenderCards data={this.state.recipeResults}/>:'Wait a sec plz!'} 
            </div>
        )
    }
    
}
export default SearchRecipeData;