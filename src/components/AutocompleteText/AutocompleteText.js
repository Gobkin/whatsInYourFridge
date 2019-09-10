import React, { Component } from 'react';
import axios from 'axios';
import './AutocompleteText.scss';



class AutocompleteText extends Component{
    constructor(){
        super();
        this.state = {
            listItems:[],
            suggestions:[],
            text: '',
        }
    }

    // getting full list of ingridients from api
    getListItems(){
        const INGREDIENTS_API_URL = 'https://www.themealdb.com/api/json/v2/8673533/list.php?i=list';
        axios.get(INGREDIENTS_API_URL)
        .then((res) => {
            const apiListItems = [];
            res.data.meals.forEach(item => {
                apiListItems.push(item.strIngredient);
            });
            this.setState({
                listItems:apiListItems,
            });
        });
    }

    // autocomplete functionality
    onTextChange = e => {
        const value = e.target.value;
        let suggestions = [];
        if (value.length > 0){
            const regex = new RegExp(`^${value}`, 'i');
            const { listItems } = this.state;
            suggestions = listItems.sort().filter(v => regex.test(v));
        }
        this.setState({ 
            suggestions, 
            text: value,
        });
    }

    selectedSuggestion (){
        this.setState({
            text:'', 
            suggestions: [],
        })
    }
    
    renderSuggestions(){
        const { suggestions } = this.state;
        if (suggestions.length === 0){
            return null;
        }
        return (
            <ul>
                {suggestions.map( item => <li onClick={ () => {
                    this.selectedSuggestion();
                    this.props.addIngredient(item);
                } }>{item}</li>)}
            </ul>
        );
    }

    componentDidMount(){
        this.getListItems();
    }

    render(){
        const { text } = this.state;

        return(
            <div className="AutocompleteText">
                
                <label class="visuallyHidden" htmlFor="ingredients">Ingredients:</label>
                    
                <input 
                    value={this.props.disabled?'Max 3 allowed':text} 
                    onChange={this.onTextChange} 
                    disabled={this.props.disabled}
                    type="text"
                    id="ingredients"
                    placeholder="I have..."
                />
                
                {this.renderSuggestions()}
            </div>
        )
    }
}

export default AutocompleteText;