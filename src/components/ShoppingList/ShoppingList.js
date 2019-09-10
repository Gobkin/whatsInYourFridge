import React, { Component } from 'react';
import './ShoppingList.scss'
import DeleteIcon from '@material-ui/icons/Delete';

// renders shopping list to the page
class ShoppingList extends Component{
    constructor(){
        super();
        this.state = { 
            shoppingItems:[],

        }
    }

    componentDidUpdate(prevProps){
        if (prevProps !== this.props){
            const {shoppingItems} = this.props;
            this.setState({shoppingItems});
        }
    }

    render(){
        const {shoppingItems} = this.state;
        return(
            <ul>
                {shoppingItems.length?
                shoppingItems.map(item => {
                    return (
                        <li className="flex spaceBetween alignCenter" key="item">
                            {item}
                            <button class="delete" onClick={()=>{this.props.removeItem(item)}}>
                                <DeleteIcon/>
                            </button>
                        </li>
                    )
                }):
                <div className="nothing">Nothing in the list</div>
                }
            </ul>
        )
    }
}

export default ShoppingList;