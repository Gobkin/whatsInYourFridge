import React from 'react';
import RecipeCard from '../RecipeCard/RecipeCard';

// renders recipe cards to the page
function RenderCards(props){
    const recipes = props.data;

    const cards = recipes.map(recipe =>{
        return <RecipeCard 
                    data={recipe}
                    getShoppingItems={props.getShoppingItems}
                    shoppingItems={props.shoppingItems}
                />
    })

    return(
        <div>
            {cards}
        </div>
    )
}

export default RenderCards;