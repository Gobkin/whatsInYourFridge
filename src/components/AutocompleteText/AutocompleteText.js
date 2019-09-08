import React, { Component } from 'react';
import axios from 'axios';
import './AutocompleteText.scss';
import './AutocompleteText.css';


class AutocompleteText extends Component{
    constructor(){
        super();
        this.state = {
            listItems:[],
            suggestions:[],
            text: '',
        }
    }

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

    onTextChange = e => {
        const value = e.target.value;
        let suggestions = [];
        if (value.length > 0){
            const regex = new RegExp(`^${value}`, 'i');
            suggestions = this.state.listItems.sort().filter(v => regex.test(v));
        }
        this.setState({ 
            suggestions, 
            text: value,
        });
    }

    selectedSuggestion (value){
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
                    this.selectedSuggestion(item);
                    this.props.addIngredient(item);
                    // this.props.searchRecipe(item);
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
                <input 
                    value={this.props.disabled?'Max 3 allowed':text} 
                    onChange={this.onTextChange} 
                    disabled={this.props.disabled}
                    type="text"
                />
                {this.renderSuggestions()}
            </div>
        )
    }
}

export default AutocompleteText;