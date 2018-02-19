import React, { Component } from 'react';
import Header from './Header';
import ListItems from './ListItems';

class FollowList extends Component {
    render() {
        return (
            <div>
                <Header title="To Follow List" />
                {(this.props.profiles.length > 0 && <ListItems profiles={this.props.profiles} handleDeleteFromList={this.props.handleDeleteFromList} />) || <p>There is no profiles to follow.</p>}
            </div>
        );
    }
}

export default FollowList;