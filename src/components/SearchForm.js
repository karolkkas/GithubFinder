import React, { Component } from 'react';

import Header from './Header';

class SearchForm extends Component {    
    onSubmitHandler = (e) => {
        e.preventDefault();
        const value = e.target.elements.inputSearch.value.trim();
        this.props.onSubmitHandler(value);
    }

    render() {
        return (
            <div className="mb-5">
                <Header title="Find Profile To Follow" />
                <form onSubmit={this.onSubmitHandler} className="form-inline row mx-0">
                    <div className="form-group col-12 col-md-8 px-0 d-flex align-items-stretch">
                        <label className="visuallyhidden" htmlFor="inputSearch">Find Github Profile</label>
                        <input type="text" className="form-control form-control-lg w-100" name="inputSearch" placeholder="Type a profile name"/>
                    </div>
                    <div className="col-12 col-md-4 px-0">
                        <button type="submit" className="btn btn-lg btn-info">Search Profile</button>
                    </div>
                </form>
            </div>
        );
    }
}

export default SearchForm;