import React, { useState } from 'react';
import MenuItem from '../MenuItem/MenuItem';
import './Directory.scss';


const Directory = () => {
    const data = [
        {
          title: 'hats',
          imageUrl: 'https://i.ibb.co/cvpntL1/hats.png',
          id: 1
        },
        {
          title: 'jackets',
          imageUrl: 'https://i.ibb.co/px2tCc3/jackets.png',
          id: 2
        },
        {
          title: 'sneakers',
          imageUrl: 'https://i.ibb.co/0jqHpnp/sneakers.png',
          id: 3
        },
        {
          title: 'womens',
          imageUrl: 'https://i.ibb.co/GCCdy8t/womens.png',
          size: 'large',
          id: 4
        },
        {
          title: 'mens',
          imageUrl: 'https://i.ibb.co/R70vBrQ/men.png',
          size: 'large',
          id: 5
        }
    ];

    const [menuData] = useState(data);
    
    return (
        <div className='directory-menu'>
            {menuData.map(({id, title, imageUrl, size})=> (
                <MenuItem key={id} title={title} imageUrl={imageUrl} size={size} />
            ))}
        </div>
    );
};

export default Directory;