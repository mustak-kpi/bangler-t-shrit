import React, { useContext } from 'react';
import { RingContacts } from '../Graendpa/Graendpa';

const Brather = () => {
    const ring = useContext(RingContacts)
    return (
        <div>
            <p>Brather</p>
            <p><small>{ring}</small></p>
        </div>
    );
};

export default Brather;