import React, {Component} from 'react';
import './AddToShoppingList.css'
import ShoppingBasketIcon from '@material-ui/icons/ShoppingBasket';
import DoneOutlineIcon from '@material-ui/icons/DoneOutline';

class AddToShoppingList extends Component{
    constructor(props){
        super(props);
        this.state = {
            isOnTheList:false,
        }
    }

    // Checking if the item already on the list
    componentDidUpdate(prevProps){
        if (prevProps.shoppingItems !== this.props.shoppingItems){

            const {shoppingItems} = this.props;
            if (shoppingItems.includes(this.props.item.ingredient)){
                this.setState({
                    isOnTheList: true,
                })
            }else{
                this.setState({
                    isOnTheList:false,
                })
            }
            
        }
        
    }

    render(){

        return(
            <div>
                 
                <button disabled={this.state.isOnTheList?true:false} onClick={()=>{this.props.add(this.props.item.ingredient)}}>
                    {this.state.isOnTheList?<DoneOutlineIcon aria-label="already on the list"/>:<ShoppingBasketIcon aria-label="add to shoping list"/>}
                </button>
            </div>
        )
    }
}

export default AddToShoppingList;
