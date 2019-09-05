import React from 'react';

function PickedItem(props){
    return(
        <div>
            {props.ingredient}
            <button onClick={()=> props.deleteItem(props.ingredient)}>X</button>
        </div>
    )
}

export default PickedItem;