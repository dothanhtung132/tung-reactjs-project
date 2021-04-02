import React from 'react';
import './ShopCollection.scss';
import ShopCollectionItem from './ShopCollectionItem';

const ShopCollection = ({title, items}) => {
    return (
        <div className='shop-collection'>
            <h1 className='title'>{title.toUpperCase()}</h1>
            <div className='preview'>
                {
                    items
                    .filter((item, idx) => idx < 4)
                    .map(({id, ...rest}) => (
                        <ShopCollectionItem key={id} {...rest} />
                    ))
                }
            </div>
        </div>
    );
};

export default ShopCollection;