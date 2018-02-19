import React, { Component } from 'react';

class SearchForm extends Component {    
    onSubmitHandler = (e) => {
        e.preventDefault();
        const value = e.target.elements.inputSearch.value;
        this.props.onSubmitHandler(value);
    }

    render() {
        return (
            <div>
                <h3>Find Profile To Follow</h3>
                <form onSubmit={this.onSubmitHandler}>
                    <label htmlFor="inputSearch">Find Github Profile</label>
                    <input type="text" name="inputSearch"/>
                    <button type="submit">Search Profile</button>
                </form>
            </div>
        );
    }
}

export default SearchForm;