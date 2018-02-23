import React, { Component } from 'react';

import Header from './Header'
import SearchForm from './SearchForm'
import Profile from './Profile'
import FollowList from './FollowList'

class App extends Component {
    state = {
        inputVal: '',
        profiles: []
    }

    componentDidMount() {
        try {
            const getLSData = localStorage.getItem("profiles");
            const profiles = JSON.parse(getLSData);
            if (profiles) {
                this.setState(() => ({
                    profiles
                }));
            }
        } catch (err) {
          //Do nothing at all
        }
    }

    componentDidUpdate() {
        this.saveToLS();
    }

    handleDeleteFromList = (profileName) => {
        this.setState((prevState) => ({
            profiles: prevState.profiles.filter(profileState => profileState.login !== profileName)
        }));
    }

    handleProfiles = (profile) => {
        if (this.state.profiles.map(item => item.id).indexOf(profile.id) === -1) {
            this.setState((prevState) => ({
                profiles: prevState.profiles.concat(profile)
            }));
            this.saveToLS();
        }
    }
    
    saveToLS() {
        const profilesLSString = JSON.stringify(this.state.profiles) || [];
        localStorage.setItem('profiles', profilesLSString)
    }

    onSubmitApp = (text) => {
        this.setState(() => ({
            inputVal: text
        }));
    }

    render() {
        return (
            <div className="container">
                <Header title="Github Finder App" tag="h1" />
                <main>
                    <div className="row mx-auto">
                        <div className="col-12 col-md-6 text-center px-0">
                            <SearchForm 
                                value={this.state.inputVal} 
                                onSubmitHandler={this.onSubmitApp} />
                            <Profile 
                                value={this.state.inputVal} 
                                handleProfiles={this.handleProfiles} />
                        </div>
                        {(this.state.profiles.length > 0) && (
                            <div className="col-12 offset-md-1 col-md-5 text-center">
                            <FollowList 
                                profiles={this.state.profiles} 
                                handleDeleteFromList={this.handleDeleteFromList} />                    
                        </div>
                        )}
                    </div>
                </main>
            </div>
        );
    }
}

export default App;