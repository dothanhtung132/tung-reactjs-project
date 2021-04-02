import React from 'react';
import './ShopCollectionItem.scss'

const ShopCollectionItem = ({id, name, price, imageUrl}) => {
    return (
        <div className='shop-collection-item'>
            <div
                className='image'
                style={{
                    backgroundImage: `url(${imageUrl})`
                }}
            >
            </div>
            <div className='collection-footer'>
                <span className='name'>{name}</span>
                <span className='price'>${price}</span>
            </div>
        </div>
    );
};

export default ShopCollectionItem;