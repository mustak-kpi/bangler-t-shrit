import React from 'react';
import './TeshritDetiles.css'

const TeshritDetiles = ({ Tshrit ,addToHendler }) => {
   
    const {id,name, gender, index, price, picture} = Tshrit
    return (
        <div className='tshrit-detiles'>
         <img src={picture} alt="" /> 
            <h4>name: {name}</h4>
            <p>price:{price}</p>
            <p>gender:{gender}</p>
            <button onClick={()=>addToHendler(Tshrit)} className='bay-tshrit'>Bay tshrit</button>
        </div>
    );
};

export default TeshritDetiles;