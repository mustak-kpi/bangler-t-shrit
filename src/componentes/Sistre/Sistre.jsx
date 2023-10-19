import React, { useContext } from 'react';
import { RingContacts } from '../Graendpa/Graendpa';

const Sistre = () => {
    const upohare = useContext(RingContacts);

    return (
        <div>
            <p>sister</p>
            <p>{upohare}</p>
        </div>
    );
};

export default Sistre;