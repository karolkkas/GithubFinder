import React, { Component } from 'react';

const ListItem = ({ title, handleDeleteFromList, profile }) => {
    const handleDelete = (e) => {
        handleDeleteFromList(title);
    };

    return (
        <li className="card border-warning mb-3 p-3">
            <div className="row d-flex align-items-center mx-0">
                <div className="col-12 col-md-3 px-0">
                    <img src={profile.avatar_url} 
                    className="c-img"
                    alt={`${profile.login} logo`} />
                </div>
                <div className="col-12 col-md-9 pr-md-0">
                    <h4 className="p-2">{title}</h4>
                    <div className="btns">
                        <a
                        href={profile.html_url}
                        className="btn btn-warning"
                        title="Visit GitHub profile"
                        target="_blank"
                        >GitHub</a>
                        <button
                        type="button"
                        className="btn btn-danger"
                        onClick={handleDelete}
                        >Delete</button>
                    </div>
                </div>
            </div>
        </li>
    );
};

export default ListItem;