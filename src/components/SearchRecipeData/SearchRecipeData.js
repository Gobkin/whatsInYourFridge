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

    findRecipeData = (array) =>{
        const RECIPE_API_URL = 'https://www.themealdb.com/api/json/v2/8673533/lookup.php?'
        const recipePromises = [];
        const recipeResults = [];
        array.forEach(id => {
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

    componentDidMount(){
        const { recipeIds }= this.props;
        this.findRecipeData(recipeIds);
    }

    componentDidUpdate(prevProps){
        console.log(prevProps);
        console.log(this.props);
        if (this.props.recipeIds != prevProps.recipeIds){
            const { recipeIds }= this.props;
            this.findRecipeData(recipeIds);
        //     console.log('updating.stuff');
        //     this.searchRecipeIds(this.props.pickedIngredients);
        }
    }
    
    render(){
        const {recipeResults} = this.state;
        return(
            <div>
                {recipeResults.length?<RenderCards data={recipeResults}/>:'Wait a sec plz!'} 
            </div>
        )
    }
    
}
export default SearchRecipeData;