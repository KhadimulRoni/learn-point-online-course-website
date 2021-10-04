import React from 'react';
import './NotFound.css';
import image from '../../404-page-not-found.jpg'

const NotFound = () => {
    return (
        <div className="error">
            <img src={image} alt="" />
        </div>
    );
};

export default NotFound;