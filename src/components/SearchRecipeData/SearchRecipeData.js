import React, { Component } from 'react';
import axios from 'axios';
import RenderCards from '../RenderCards/RenderCards';

class SearchRecipeData extends Component{
    constructor(props){
        super(props);
        this.state = {
            recipeResults : [],

        }
    }

    // gets full recipe data from the api by recipe id
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
        const { recipeIds } = this.props;
        this.findRecipeData(recipeIds);
    }

    componentDidUpdate(prevProps){
        if (this.props.recipeIds !== prevProps.recipeIds){
            const { recipeIds }= this.props;
            this.findRecipeData(recipeIds);
        }
    }
    
    render(){
        const {recipeResults} = this.state;
        return(
            <div>
                {recipeResults.length?
                <RenderCards 
                    data={recipeResults}
                    getShoppingItems={this.props.getShoppingItems}
                    shoppingItems={this.props.shoppingItems}
                />:
                <em>Just one moment!</em>} 
            </div>
        )
    }
    
}
export default SearchRecipeData;