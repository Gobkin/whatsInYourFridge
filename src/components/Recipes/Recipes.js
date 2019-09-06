import React, { Component } from 'react';
import SearchRecipeData from '../SearchRecipeData/SearchRecipeData';

class Recipes extends Component{
    constructor(){
        super();
        this.state = {
            recipes : [],//IDK MB JUST HAVE TO BE A FUNCTION CONSIDER REFACTOR LATER!!!!!!!!!!!!!
        }
    }

    getRecipeData = data =>{
        this.setState({
            recipes: data,
        });
    }

    render(){

        return(
            <div>
                <SearchRecipeData 
                    recipeIds={this.props.recipeIds}
                />
            </div>
        )
    }
}
export default Recipes;