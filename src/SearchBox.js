import React from 'react';

const SearchBox = ({searchfield, searchChange, listen}) =>{
    return(
    	<div className = 'pa2'>
	     <input className='pa3 b2 b--green bg-light-gray'
	        type ='search' 
	        placeholder='Search Robots Here'
            onChange={searchChange}
         />
        </div>
    );
}

export default SearchBox;