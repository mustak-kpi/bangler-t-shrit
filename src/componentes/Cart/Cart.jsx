import React from 'react';
import './Cart.css'


const Cart = ({cart,removeCartHendler}) => {
    let message;
    if(cart.length === 0){
        message = <p>add to products now</p>
    }
    else{
      message = <div>
        <span>brolock taka beshi</span>
        <p>thanks you </p>
      </div>  
    }
    return (
        <div>
            
            <h1>hello sir oders now{cart.length}</h1>
            <h3 className={`bold ${cart.length ===3 ? 'green' :'skyblue'}`}>wevsite titles now</h3>
            <h2 className={cart.length > 1 ? 'purple' : 'red'}>oders page!!!</h2>
            {cart.length > 2 ? 
            <span>give me your mony</span> 
            : <span>'pleass orders any mony'</span>}
            {message}
            {
                cart.map(tshrit => <p
                    key={tshrit._id}
                    >{tshrit.name}
               <button onClick={ ()=> removeCartHendler(tshrit._id)}>X</button>
               </p>)
            }
            {cart.length ===5 && <p>onek beshi taka !!!!!</p>}
            {cart.length ===5 || <h4 className='yellow'>takai nai amar kace too</h4>}
        </div>
    );
};

export default Cart;