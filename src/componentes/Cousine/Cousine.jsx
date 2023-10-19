import React, { useContext } from 'react';
import Brovai from '../brovai/Brovai';
import { MonyContacts } from '../Graendpa/Graendpa';

const Cousine = ({children, hendeler, raing}) => {
    const [money ,setMoney] = useContext(MonyContacts)

    return (
        <div>
            <p>cousin</p>
            <h4>money{money}</h4>
            <p><small>{children}</small></p>
           
            { hendeler &&  <Brovai raing={raing}></Brovai>}
        </div>
    );
};

export default Cousine;
