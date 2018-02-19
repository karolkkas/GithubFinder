import React, { Component } from 'react';

class Profile extends Component {
    state = { 
        profileData: {},
        error: ''
    }

    handleClick = () => {
        const data = this.state.profileData;
        this.props.handleProfiles(data);
    } 

    componentWillReceiveProps(nextProps) {
        const url = `https://api.github.com/users${nextProps.value ? '/'+nextProps.value : ''}`;
        if (this.props.value !== nextProps.value) {
            fetch(url)
                .then(res => res.json())
                .then(data => {
                    this.setState(() => ({
                        profileData: data
                    }))
                })
                .catch(error => {console.log(error)
                    this.setState(() => ({
                        error: error.message
                    }));
                });
        }
    }

    render() {
        return (
            <div>
                {this.props.value && 
                (<div>
                    <img src={this.state.profileData.avatar_url} alt="Profile avatar"/>
                    <a href={this.state.profileData.html_url} target="_blank">View Profile</a>
                    <button type="button" onClick={this.handleClick}>Add to Follow List</button>
                </div> || <p>{this.state.error}</p>)
                }
            </div>
        )
    }
}

export default Profile;