import React from 'react';

function PickedItem(props){
    const {ingredient} = props;
    return(
        <div>
            {ingredient}
            <button onClick={()=> props.deleteItem(ingredient)}>X</button>
        </div>
    )
}

export default PickedItem;