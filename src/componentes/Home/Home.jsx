import React, { useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import TeshritDetiles from '../TshritDetiles/TeshritDetiles';
import Cart from '../Cart/Cart';
import './Home.css'
import toast from 'react-hot-toast';

const Home = () => {
    const Tshrits = useLoaderData()
    // console.log(Tshrits);
    const [cart, setCart] = useState([])
    const  addToHendler =Tshrit =>{
      const  esxit = cart.find(ts => ts._id === Tshrit._id);
      if(esxit){
     toast('alrady exides')
      }
      else{

        const newCart =[...cart, Tshrit]
        setCart(newCart);
      }
    }

    const removeCartHendler = id =>{
       const remaing = cart.filter(ts => ts._id !==id)
       setCart(remaing)
    }
    return (
        <div className='Home-container'>
            <div className="tshrit">
              {
                Tshrits.map(Tshrit => <TeshritDetiles
                 key={Tshrit._id}
                 Tshrit={Tshrit}
                 addToHendler={addToHendler}
                ></TeshritDetiles>)
              }
            </div>
            <div className="cate-container">
             <Cart
             cart = {cart}
             removeCartHendler={removeCartHendler}
             ></Cart>
            </div>
        </div>
    );
};

export default Home;