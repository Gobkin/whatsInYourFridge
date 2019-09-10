import React from 'react';
import DeleteIcon from '@material-ui/icons/Delete';

function PickedItem(props){
    const {ingredient} = props;
    return(
        <li className="flex space-between align-center" key="ingredient">
            {ingredient}
            <button className="delete" onClick={()=> props.deleteItem(ingredient)}><DeleteIcon/></button>
        </li>
    )
}

export default PickedItem;