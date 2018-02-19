import React, { Component } from 'react';

import SearchForm from './SearchForm'
import Profile from './Profile'
import FollowList from './FollowList'

class App extends Component {
    state = {
        inputVal: '',
        profiles: []
    }

    componentDidUpdate() {
        console.log(this.state.profiles);
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
        }
    }
    
    onSubmitApp = (text) => {
        this.setState(() => ({
            inputVal: text
        }));
    }

    render() {
        return (
            <div>
                <header>
                    <h1>Github Finder App</h1>
                </header>
                <main>
                    <SearchForm 
                        value={this.state.inputVal} 
                        onSubmitHandler={this.onSubmitApp} />
                    <Profile 
                        value={this.state.inputVal} 
                        handleProfiles={this.handleProfiles} />
                    <FollowList 
                        profiles={this.state.profiles} 
                        handleDeleteFromList={this.handleDeleteFromList} />
                </main>
            </div>
        );
    }
}

export default App;