import React, { Component } from 'react';

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
                    return <li key="item">{item}<button onClick={()=>{this.props.removeItem(item)}}>X</button></li>
                }):
                <div>Nothing in the list</div>
                }
            </ul>
        )
    }
}

export default ShoppingList;