import React, { Component } from 'react';
import './RecipeCard.scss';
import Modal from '../Modal/Modal'

class RecipeCard extends Component{
    constructor(props){
        super(props);
        this.state = {
        }
    }
    
    // checks if the ingredient already on the shopping list
    shoppingCheck(item, array){
        array.forEach((element)=>{
            console.log('checking for duplicates')
            if (element === item){
                console.log('item on the list')
                return true
            }
        })
    }
    

    render(){
        const {data, shoppingItems} = this.props
        const divStyle = {
            backgroundImage: 'url(' + data.strMealThumb + ')',
            };

        // sets dynamically bg-image
        function bgImage() {
            return <div className="cardImage basis-35" style={divStyle}></div>;
        }
        return(
            <div className="RecipeCard flex">
                {bgImage()}
                <div className="content flex flexColumn basis-60">
                    <h2>{data.strMeal}</h2>
                    <div className="cardRight flex spaceAround">
                        <div className="contentContainer flex flexColumn">
                            <strong>{data.strCategory}</strong>
                            <em>{data.strArea}</em>
                        </div>
                        <Modal
                            className="Modal"
                            shoppingItems={shoppingItems}
                            data={data}
                            getShoppingItems={this.props.getShoppingItems}
                        />
                    </div>
                </div>
            </div>
        )
    }

}

export default RecipeCard;