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
                        <li className="flex spaceBetween alignCenter" key={item}>
                            {item}
                            <button className="delete" onClick={()=>{this.props.removeItem(item)}}>
                                <DeleteIcon aria-label="delete"/>
                            </button>
                        </li>
                    )
                }):
                <div className="nothing">Nothing on the list</div>
                }
            </ul>
        )
    }
}

export default ShoppingList;