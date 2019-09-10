import React, { Component } from 'react';
import './RecipeCard.scss';
import './RecipeCard.css';
import Modal from '../Modal/Modal'

class RecipeCard extends Component{
    constructor(props){
        super(props);
        this.state = {
        }
    }

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

        function bgImage() {
            return <div className="card-image basis-35" style={divStyle}></div>;
        }
        return(
            <div className="RecipeCard flex">
                {bgImage()}
                <div className="content flex flex-column basis-60">
                    <h2>{data.strMeal}</h2>
                    <div className="card-right flex space-around">
                        <div className="contentContainer flex flex-column">
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