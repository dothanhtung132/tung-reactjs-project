import React, { useState } from 'react';
import SHOP_DATA from './shopData';
import ShopCollection from '../../components/Collection/ShopCollection';

const ShopPage = () => {
    const [collections] = useState(SHOP_DATA);
    return (
        <div className='shop-page'>
            {
                collections.map(({id, ...rest})=>(
                    <ShopCollection key={id} {...rest} />
                ))
            }
        </div>
    );
};

export default ShopPage;