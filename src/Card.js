import React from 'react';
import './Card.css';

const Card = ({name, email, id}) =>{
	//const{name, email, id} = props;
  return (
    <div className='tc bg-dark-gray dib br3 ma2 grow bw2 shadow-5'>
     <img alt="robot" src ={`https://robohash.org/${id}?200x200`} />
     <div>
      <h2 className='white'>{name}</h2>
      <p className='white'>{email}</p> 
     </div>
    </div>
  );
}

export default Card;
