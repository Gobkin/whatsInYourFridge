import React from 'react';

function PickedItem(props){
    const {ingredient} = props;
    return(
        <div key="ingredient">
            {ingredient}
            <button onClick={()=> props.deleteItem(ingredient)}>X</button>
        </div>
    )
}

export default PickedItem;