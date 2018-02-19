import React, { Component } from 'react';

const ListItem = ({ title, handleDeleteFromList, profile }) => {
    const handleDelete = (e) => {
        const itemName = e.currentTarget.parentElement.children[1].innerHTML;
        handleDeleteFromList(itemName);
    };

    return (
        <li>
            <img src={profile.avatar_url} alt={`${profile.login} logo`} />
            <h4>{title}</h4>
            <a
              href={profile.html_url}
              title="Visit GitHub profile"
            >GitHub</a>
            <button
              type="button"
              onClick={handleDelete}
            >Delete</button>
        </li>
    );
};

export default ListItem;