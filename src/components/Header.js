import React, { Component } from 'react';

const Header = ({ title, tag }) => {
    return (
        <div className="text-center">
            { (tag && tag === "h1") ? <h1 className="my-5">{title}</h1> : <h3 className="mb-3">{title}</h3> }
        </div>
    );
}

export default Header;