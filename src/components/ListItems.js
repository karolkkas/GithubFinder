import React, { Component } from 'react';
import ListItem from './ListItem';

class ListItems extends Component {
    render() {
        const createProfiles = this.props.profiles.map(profile => (
            <ListItem 
              key={profile.id} 
              title={profile.login}
              handleDeleteFromList={this.props.handleDeleteFromList}
              profile={profile}
            />
        ));
        return (
            <div>
                <ol>
                    {createProfiles}
                </ol>
            </div>
        );
    }
}

export default ListItems;