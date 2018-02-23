import React, { Component } from 'react';

class Profile extends Component {
    state = { 
        profileData: {},
        error: ''
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

    handleClick = () => {
        const data = this.state.profileData;
        this.props.handleProfiles(data);
    } 

    render() {
        return (
            <div>
                {this.props.value && 
                (
                <div className="card border-info mb-3 profile px-0">
                    <div className="card-header mb-2">
                        <h4>{this.state.profileData.login}</h4>
                    </div>
                    <div className="row">
                        <div className="col-12 col-md-6 mb-3">
                            <img src={this.state.profileData.avatar_url} className="img-fluid profile__img mb-3" alt="Profile avatar"/>
                            <a href={this.state.profileData.html_url} target="_blank" className="btn btn-warning w-75">View Profile</a>
                        </div>
                        <div className="col-12 col-md-6">
                            <div className="info mb-2">
                                <ul className="list-group">
                                    <li className="list-group-item d-flex justify-content-between align-items-center">
                                        Repos:
                                        <span className="badge badge-warning">{this.state.profileData.public_repos}</span>
                                    </li>
                                    <li className="list-group-item d-flex justify-content-between align-items-center">
                                        Gists:
                                        <span className="badge badge-warning">{this.state.profileData.public_gists}</span>
                                    </li>
                                    <li className="list-group-item d-flex justify-content-between align-items-center">
                                        Followers:
                                        <span className="badge badge-warning">{this.state.profileData.followers}</span>
                                    </li>
                                    <li className="list-group-item d-flex justify-content-between align-items-center">
                                        Following:
                                        <span className="badge badge-warning">{this.state.profileData.following}</span>
                                    </li>
                                </ul>
                                <div className="d-flex flex-column mt-3">
                                    {this.state.profileData.name && <span className="text-center">Name: {this.state.profileData.name}</span>}
                                    {this.state.profileData.location && <span className="text-center">Location: {this.state.profileData.location}</span>}
                                    <span className="text-muted text-center">Member since: {this.state.profileData.created_at}</span>
                                </div>
                            </div>
                        </div>
                    </div>
                    <button type="button" className="btn btn-info" onClick={this.handleClick}>Add to Follow List</button>
                </div> 
                || <p>{this.state.error}</p>
                )
                }
            </div>
        )
    }
}

export default Profile;