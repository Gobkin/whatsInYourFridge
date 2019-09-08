// import React from 'react';
// import axios from 'axios';

<<<<<<< HEAD
function SearchRecipe(props){
    console.log(props.ingredients);
    const RECIPE_API_URL = 'https://www.themealdb.com/api/json/v2/8673533/filter.php?';
    const foundRecipesIds = [];
    let queryString = ''
    props.ingredients.forEach(item => {
        queryString = queryString + item +',';
    })
    let queryUrl = `${RECIPE_API_URL}i=${queryString}`
=======
// function SearchRecipe(props){
    
//     const RECIPE_API_URL = 'https://www.themealdb.com/api/json/v2/8673533/filter.php?';
//     const foundRecipesIds = [];
//     let queryString = ''
//     props.ingredients.forEach(item => {
//         queryString = queryString + item +',';
//     })
//     let queryUrl = `${RECIPE_API_URL}i=${queryString}`
>>>>>>> fix-state
    
//     // this one here removes the trailing coma at the end of the query string;
//     axios.get(queryUrl.substring(0, queryUrl.length - 1))
//     .then(res =>{
//         res.data.meals.forEach(recipe => {
//             foundRecipesIds.push(recipe.idMeal);
//         });
//     });
    
    // return(
    //     <div>
    //         <button onClick={()=>{props.getIds(foundRecipesIds)}}>Find Meals</button>
    //     </div>
    // )
}

// export default SearchRecipe;