import React from 'react';
import { withRouter } from 'react-router-dom';
import './MenuItem.scss';

const MenuItem = ({title, imageUrl, size, history, match}) => {
    return (
        <div className={`menu-item ${size ? size : ''}`} onClick={()=>history.push(`${match.url}${title}`)}>
            <div style={{
            backgroundImage: `url(${imageUrl})`
        }} className='background-image'></div>
            <div className='content'>
                <h1 className='title'>{title.toUpperCase()}</h1>
                <span className='sub-title'>SHOP NOW</span>
            </div>
        </div>
    );
};

export default withRouter(MenuItem);