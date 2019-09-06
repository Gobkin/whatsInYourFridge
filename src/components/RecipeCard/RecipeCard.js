import React from 'react';
import './RecipeCard.scss';
import './RecipeCard.css';

function RecipeCard(props){
    const data = props.data
    const ingredientsArray = [];
    const measurementsArray = [];
    const ingredientPattern = new RegExp('^strIngredient', 'i');
    const measurePattern = new RegExp('^strMeasure', 'i');
    const combinedArray = [];

    for (let key in data){
        if (ingredientPattern.test(key) && data[key]){
            ingredientsArray.push(data[key]);
        }else if (measurePattern.test(key) && data[key]){
            measurementsArray.push(data[key]);
        }
    }

    ingredientsArray.forEach((item, index) => {
        const ingrObj = {};
        ingrObj.ingredient = item;
        ingrObj.measure = measurementsArray[index];
        combinedArray.push(ingrObj);
    })

    const renderIngredients = combinedArray.map(item => {
        return(
            <li>{item.ingredient} - {item.measure}</li>
        )
    })
    return(
        <div className="RecipeCard">
            <h2>{data.strMeal}</h2>
            <div className="content flex">
                <div className="image-container flex">
                    <img src={data.strMealThumb} alt=""></img>
                </div>
                <div>
                    <ul>
                        {renderIngredients}
                    </ul>
                </div>
            </div>
        </div>
    )

}
export default RecipeCard;