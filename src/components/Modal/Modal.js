import React from 'react';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import Slide from '@material-ui/core/Slide';
import AddToShoppingList from '../AddToShoppingList/AddToShoppingList';

const Transition = React.forwardRef(function Transition(props, ref) {
return <Slide direction="up" ref={ref} {...props} />;
});

export default function AlertDialogSlide(props) {
const [open, setOpen] = React.useState(false);

    function handleClickOpen() {
        setOpen(true);
    }

    function handleClose() {
        setOpen(false);
    }

    const {data, shoppingItems} = props
    const ingredientsArray = [];
    const measurementsArray = [];
    const ingredientPattern = new RegExp('^strIngredient', 'i');
    const measurePattern = new RegExp('^strMeasure', 'i');
    const combinedArray = [];
        
    for (let key in data){
        if (ingredientPattern.test(key) && data[key]){
            ingredientsArray.push(data[key]);
        }else if (measurePattern.test(key) && data[key]){
            measurementsArray.push(data[key]);
        }
    }
    
    ingredientsArray.forEach((item, index) => {
        const ingrObj = {};
        ingrObj.ingredient = item;
        ingrObj.measure = measurementsArray[index];
        combinedArray.push(ingrObj);
    });
        
    const renderIngredients = combinedArray.map(item => {
        return(
            <ul>
                <li key={item.ingredient} className="flex spaceBetween ingredientList">
                    <div>
                        {item.ingredient} - {item.measure}
                    </div> 
                    <AddToShoppingList
                        item={item}
                        add={props.getShoppingItems}
                        shoppingItems={shoppingItems}
                    />
                </li>
            </ul>
        )
    });

    return (
        <div>
        <Button variant="outlined" color="primary" onClick={handleClickOpen}>
            Details
        </Button>
        <Dialog
            open={open}
            TransitionComponent={Transition}
            keepMounted
            onClose={handleClose}
            aria-labelledby="alert-dialog-slide-title"
            aria-describedby="alert-dialog-slide-description"
        >
            <DialogTitle id="alert-dialog-slide-title">{data.strMeal}</DialogTitle>
            <DialogContent>
                <DialogContentText id="alert-dialog-slide-description">
                    <div>
                        <h3>Ingredients</h3>
                        {renderIngredients}
                    </div>
                    <div>
                    <h3>Directions:</h3>
                    <p>
                        {data.strInstructions}
                    </p>
                    </div>
                </DialogContentText>

            </DialogContent>
            <DialogActions>
                <Button onClick={handleClose} color="primary">
                    Close
                </Button>
            </DialogActions>
        </Dialog>
        </div>
    );
}