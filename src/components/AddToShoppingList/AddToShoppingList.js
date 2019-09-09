import React, {Component} from 'react';

class AddToShoppingList extends Component{
    constructor(props){
        super(props);
        this.state = {
            isOnTheList:false,
        }
    }

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
                 
                <button onClick={()=>{this.props.add(this.props.item.ingredient)}}>
                    {this.state.isOnTheList?'is on the list':'add to shopping list->'}
                </button>
            </div>
        )
    }
}

export default AddToShoppingList;
