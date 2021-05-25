import React from 'react';
import './search-box.styles.css'

export const Searchbox = ({ placeHolderName,handleChange })=>(
    <input
     className='search'
     type='search'
           placeholder= {placeHolderName}
           onChange={handleChange}
         />
);
