import React from 'react';
import RecipeCard from '../RecipeCard/RecipeCard';

function RenderCards(props){
    const recipes = props.data;

    const cards = recipes.map(recipe =>{
        return <RecipeCard data={recipe}/>
    })

    return(
        <div>
            {cards}
        </div>
    )
}

export default RenderCards;